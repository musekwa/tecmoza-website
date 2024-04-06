"use server";
import * as z from "zod";
import { userAction } from "./user";
import { messageAction } from "./message";
import { Resend } from 'resend';
import { contactFormSchema } from "@/index";
import db from "../lib/db";

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

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'musekwa@tecmoza.com',
      subject: `Para TECMOZA: ${name} (${email})`,
      html: `<div>
              <h1 style="font-size: 20px; font-weight: bold;">Serviço: ${service}</h1>
              <p style="font-size: 16px; ">Nome: ${name}</p>
              <p style="font-size: 16px;">Email: ${email}</p>
              <p style="font-size: 16px;">Telefone: ${phone}</p>
              <p style="font-size: 16px;">Mensagem: ${message}</p>
            </div>`
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
