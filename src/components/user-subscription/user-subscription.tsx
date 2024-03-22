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
      <Button onPress={onOpen} className="text-sky-500 bg-white hover:bg-sky-900 hover:text-white">
        Subscrever
      </Button>
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
