"use server";
import * as z from "zod";
import { contactFormSchema } from "@/schemas";
import db from "@/lib/db";

import { Schema } from "mongoose";
import NewsSubscriber from "@/models/newsSubscriber";

interface Props {

  email: string;
  name: string;

}

export const subscribeAction = async (data: Props) => {
  const { email, name } = data;

  try {
    await db.connect();
    const existingUser = await NewsSubscriber.findOneAndUpdate({ email }, {email, name}, { new: true, upsert: true, });
    return {
        success:
          "O seu email foi adicionado. Receberá periodicamente novidades da TECMOZA.",
      };
  } catch (error) {
    return {
      error:
        "O usuário não foi adicionado. Tente subscrever novamente.",
    };
  }
};
