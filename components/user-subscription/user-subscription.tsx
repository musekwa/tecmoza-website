"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";

// import { Button } from "@/components/ui/button";
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
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

type Props = {};

const UserSubscription = ({}: Props) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className=" space-y-2 ">
    <p className="text-sm font-normal">
      Subscreva à nossa e-newsLetter
    </p>
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
        }}
        

      >
        <DialogTrigger asChild>
          {/* <div className="flex flex-col-reverse md:flex-row-reverse gap-1 md:gap-4 justify-between items-center"> */}

          <Button
            variant="solid"
            className="text-white md:text-[16px] bg-sky-900 w-full"
          >
            Subscrever
          </Button>

          {/* </div> */}
        </DialogTrigger>
        <DialogContent className="bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="mb-2">
              <h1 className="text-center text-3xl font-bold">Subscrever</h1>
            </DialogTitle>
            <DialogDescription>
              <UserSubscriptionForm
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserSubscription;
