"use client";
import React from "react";
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
    <div className="flex flex-col gap-1 ">
      <Button onPress={onOpen} variant="solid" className="text-white text-[16px] bg-sky-900">
        Subscrever
      </Button>
      <p className="text-[12px] text-white">Subscreva à nossa e-newsLetter</p>
    </div>
      <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <UserSubscriptionForm onCloseModal={onClose} isOpenModal={isOpen} />
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );

  
};

export default UserSubscription;
