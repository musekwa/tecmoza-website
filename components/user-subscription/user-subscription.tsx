"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserSubscriptionForm from "./user-subscription-form";

type Props = {};

const UserSubscription = ({}: Props) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className=" space-y-2 ">
      <p className="text-sm font-normal">Subscreva à nossa e-newsLetter</p>
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
        }}
      >
        <DialogTrigger asChild>
          <Button className="text-white md:text-[16px] bg-sky-900 hover:bg-sky-800 w-full">
            Subscrever
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="mb-2 text-center text-3xl font-bold">
              Subscrever
            </DialogTitle>
            <DialogDescription className="sr-only">
              Preencha o formulário abaixo para se inscrever na nossa newsletter
            </DialogDescription>
          </DialogHeader>
          <div>
            <UserSubscriptionForm
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserSubscription;
