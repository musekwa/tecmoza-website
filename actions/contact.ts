"use server";
import * as z from "zod";
import { userAction } from "./user";
import { messageAction } from "./message";
import { Resend } from 'resend';
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

    // include the message to an email sent to musekwa@tecmoza.com
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'TECMOZA <info@tecmoza.com>',
      to: ['musekwa2011@gmail.com'],
      subject: `${name} contactou a TEZMOZA`,
      react: Welcome({ name, email, message, phone, companyName, companyWebsite, service, }),
      // html: ''
    });

    return {
      success:
        "A sua mensagem foi enviada. Em breve receberá uma resposta ao seu email. Obrigado!",

    };
  } catch (error) {
    return {
      error:
        "A sua mensagem não foi enviada. Por favor, tente novamente mais tarde.",
    };
  }
};
