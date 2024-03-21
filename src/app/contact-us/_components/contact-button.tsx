"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import ContactForm from "./contact-form";

interface ActionButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  url?: string;
  asChild?: boolean;
}

const ContactButton = ({
  children,
  mode = "redirect",
  asChild,
}: ActionButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/contact-us/send-message");
  };

  if (mode === "modal") {
    return <span>TODO: Implement Modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default ContactButton;
