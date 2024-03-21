"use server";
import * as z from "zod";
import { contactFormSchema } from "@/schemas";
import db from "@/lib/db";
import User from "@/models/user";
import Message from "@/models/message";
import { Schema } from "mongoose";

interface Props {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

export const userAction = async (data: Props) => {
  const { name, email, phone, isSubscribed } = data;
  let updatedUserData = {}

  // Avoid unsubscribing a already-subscribed user
  if (isSubscribed){
    updatedUserData = {
      ...updatedUserData,
      name,
      email,
      phone,
      isSubscribed: true,
    };
  }
  else {
    updatedUserData = {
      ...updatedUserData,
      name,
      email,
      phone,
    };
  }

  try {
    // create a new user or update an existing user one without changing their previous subscription status
    const existingUser = await User.findOneAndUpdate({ email }, updatedUserData, { new: true, upsert: true, });
    if (existingUser) {
      return existingUser._id;
    }
    const newUser = new User({
      name,
      email,
      phone,
      isSubscribed,
    });

    const savedUser = await newUser.save();
    return savedUser._id;
  } catch (error) {
    return {
      error:
        "A sua mensagem não foi enviada. Por favor, tente novamente mais tarde.",
    };
  }
};
