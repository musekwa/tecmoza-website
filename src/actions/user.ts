"use server";
import * as z from "zod";
import { contactFormSchema } from "@/schemas";
import db from "@/lib/db";
import User from "@/models/user";
import Message from "@/models/message";
import { Schema } from "mongoose";
import NewsSubscriber from "@/models/newsSubscriber";

interface Props {
  name: string;
  email: string;
  phone: string;
  isSubscribed?: boolean;
}

export const userAction = async (data: Props) => {
  const { name, email, phone, isSubscribed } = data;
  let updatedUserData = { name, email, phone, isSubscribed };

  // Avoid unsubscribing a already-subscribed user
  if (isSubscribed) {
    updatedUserData = {
      ...updatedUserData,
      name,
      email,
      phone,
      isSubscribed: true,
    };
  } else {
    updatedUserData = {
      ...updatedUserData,
      name,
      email,
      phone,
    };
  }

  try {
    // create a new user or update an existing user one without changing their previous subscription status
    const existingUser = await User.findOneAndUpdate(
      { email },
      updatedUserData,
      { new: true, upsert: true }
    );
    // Add this user to the NewsSubscriber collection
    if (isSubscribed) {
      const newSubscriver = await NewsSubscriber.findOneAndUpdate(
        { email },
        { email, name },
        {
          new: true,
          upsert: true,
        }
      );
    }

    return existingUser._id;
  } catch (error) {
    return {
      error:
        "A sua mensagem não foi enviada. Por favor, tente novamente mais tarde.",
    };
  }
};
