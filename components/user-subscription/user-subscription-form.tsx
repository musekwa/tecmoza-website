"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { userSubscriptionSchema } from "@/index";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { subscribeAction } from "@/subscribe";
import { useToast } from "../ui/use-toast";

type Props = {
  isDialogOpen:boolean;
  setIsDialogOpen: (open: boolean)=>void;
};

const UserSubscriptionForm = ({ isDialogOpen, setIsDialogOpen  }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
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
          setTimeout(() => {
            setIsDialogOpen(false);
          }, 3000)
          toast({
            variant: "success",
            title: "Subscrição Sucedida",
            description: "O seu email foi adicionado. Receberá periodicamente novidades da TECMOZA.",
          })
        } else {
          setError(data.error);
          toast({
            variant: "destructive",
            title: "Subscrição não foi sucedida",
            description: "O seu email não foi adicionado. Tente subscrever novamente.",
          })
        }
      });
    });
  };
  return (
    <div className=" max-w-[550px]">
      <p className="text-[12px] text-center mb-8 ">
      Respeitamos a sua privacidade. <br /> Não usaremos seus dados pessoais para os fins não autorizados!
      </p>
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
                        // autoFocus={false}
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
                        autoFocus={false}
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
            {
              isPending && <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            }
            Subscrever
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserSubscriptionForm;
