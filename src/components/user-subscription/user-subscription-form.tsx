"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSubscriptionSchema } from "@/schemas";
import { Button } from "../ui/button";
import FormError from "@/app/contact-us/_components/form-error";
import FormSuccess from "@/app/contact-us/_components/form-success";
import { subscribeAction } from "@/actions/subscribe";
import { Input } from "../ui/input";

type Props = {
  onCloseModal: () => void;
  isOpenModal: boolean;
};

const UserSubscriptionForm = ({ onCloseModal, isOpenModal }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof userSubscriptionSchema>>({
    resolver: zodResolver(userSubscriptionSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof userSubscriptionSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      subscribeAction(values).then((data) => {
        if (data.success) {
          setSuccess(data.success);
          form.reset();
        } else {
          setError(data.error);
        }
      });
    });
  };
  return (
    <div className=" max-w-[550px]">
      <div className="my-2">
      <h1 className="text-center text-3xl font-bold">Subscrever</h1>
      <p className="text-[10px]  text-gray-600 text-center">
        Respeitamos a sua privacidade. Não usaremos os seus dados pessoais para
        fins não autorizados.
      </p>

      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6  bg-white"
        >

          <div className="flex flex-col md:flex-row gap-2 overflow-x-hidden">
            <div className="w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-gray-500">Nome</span>{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending || !!success}
                        {...field}
                        placeholder="O seu nome"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-gray-500">Email</span>{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending || !!success}
                        {...field}
                        placeholder="O seu email"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending || !!success}
            type="submit"
            className="flex gap-3 w-full bg-sky-500"
          >
            Subscrever
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserSubscriptionForm;
