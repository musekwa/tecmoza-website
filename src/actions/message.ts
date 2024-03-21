"use server";
import * as z from "zod";
import { contactFormSchema } from "@/schemas";
import db from "@/lib/db";
import User from "@/models/user";
import Message from "@/models/message";
import { Schema } from "mongoose";

interface Props {
  companyName?: string;
  companyWebsite?: string;
  service: string;
  message: string;
}

export const messageAction = async (data: Props, userId: Schema.Types.ObjectId) => {
  const { companyName, companyWebsite, service, message } = data;

  try {
    const newMessage = new Message({
      companyName,
      companyWebsite,
      service,
      message,
      user: userId,
    });

    const savedMessage = await newMessage.save();
    return savedMessage;
  } catch (error) {
    return {
      error:
        "A sua mensagem não foi enviada. Por favor, tente novamente mais tarde.",
    };
  }
};
