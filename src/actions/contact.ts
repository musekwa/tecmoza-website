"use server";
import * as z from "zod";
import { contactFormSchema } from "@/schemas";
import db from "@/lib/db";
import { userAction } from "./user";
import { messageAction } from "./message";

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
