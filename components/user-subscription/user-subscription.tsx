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

      <Dialog open={isDialogOpen} onOpenChange={(open) =>{
        setIsDialogOpen(open);
      }} >
        <DialogTrigger asChild>
          <Button
         
            variant="solid"
            className="text-white text-[16px] bg-sky-900"
          >
            Subscrever
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-8 my-8">
              <h1 className="text-center text-3xl font-bold">Subscrever</h1>
            </DialogTitle>
            <DialogDescription>
              <UserSubscriptionForm isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


  );
};

export default UserSubscription;
