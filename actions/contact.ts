"use server";
import * as z from "zod";
import { userAction } from "./user";
import { messageAction } from "./message";
import { Resend } from "resend";
import { contactFormSchema } from "@/index";
import db from "../lib/db";
import Welcome from "@/emails/Welcome";

export const contact = async (values: z.infer<typeof contactFormSchema>) => {
  const validatedFields = contactFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error:
        "A sua mensagem não foi enviada. Por favor, verifique os dados e tente novamente.",
    };
  }

  const {
    name,
    email,
    companyName,
    companyWebsite,
    phone,
    service,
    message,
    isSubscribed,
  } = validatedFields.data;

  try {
    await db.connect();

    const savedUserId = await userAction({ name, email, phone, isSubscribed });

    const newMessage = await messageAction(
      { companyName, companyWebsite, service, message },
      savedUserId
    );

    // include the message to an email sent to tecmoza@tecmoza.com
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "TECMOZA <info@tecmoza.com>",
      replyTo: email, // allow you to reply directly to the guest
      to: ["tecmoza@tecmoza.com"],
      subject: `${name} contactou a TECMOZA`,
      react: Welcome({
        name,
        email,
        message,
        phone,
        companyName,
        companyWebsite,
        service,
      }),
      // html: ''
    });

    return {
      success:
        "A sua mensagem foi enviada. Em breve receberá uma resposta ao seu email. Obrigado!",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return {
      error:
        "A sua mensagem não foi enviada. Por favor, tente novamente mais tarde.",
    };
  }
};
