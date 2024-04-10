"use client";
import React, { useEffect, useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { contactFormSchema } from "@/index";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Checkbox } from "@/ui/checkbox";
import { Textarea } from "@/ui/textarea";
import { contact } from "@/actions/contact";
import FormSuccess from "@/form-success";
import FormError from "@/form-error";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Loader2 } from "lucide-react";

type Props = {};

const ContactForm = (props: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      companyWebsite: "",
      phone: "",
      service: "",
      message: "",
      isSubscribed: false,
    },
  });

  useEffect(() => {
    if (error) {
      toast.error("A sua mensagem não foi enviada.");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    if (success) {
      toast.success("A sua mensagem foi enviada.");
      setTimeout(() => {
        setSuccess("");
      }, 10000);
    }
  }, [error, success]);

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      contact(values).then((data) => {
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
    <div className="overflow-auto ">
      <Form {...form}>
        <div className="space-y-6 shadow-md p-6 border border-gray-400 rounded-md bg-gray-50 dark:bg-gray-900 ">
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 "
          >
            <FormError message={error} />
            <FormSuccess message={success} />
            <p className="my-4 text-xs  text-gray-500">
              Deixe a sua mensagem aqui e nós lhe vamos responder em menos de 2
              horas.
            </p>
            <div className="flex flex-col md:flex-row gap-4 overflow-x-hidden">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="">Nome</span>{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="O seu nome"
                          type="text"
                          className="text-gray-600 rounded-xl border "
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
                        <span className="">Email</span>{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="O seu email"
                          type="text"
                          className="text-gray-600 rounded-xl border "
                        />
                      </FormControl>
                      {/* <FormDescription>
                                Please enter your name
                              </FormDescription> */}
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="">Nome da Empresa</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="O nome da sua empresa"
                          type="text"
                          className="text-gray-600 rounded-xl border "
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
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="">Website da empresa</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="O website da sua empresa"
                          type="text"
                          className="text-gray-600 rounded-xl border "
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 overflow-x-hidden">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="">Número de Telefone</span>{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="O seu número de telefone"
                          type="number"
                          className="text-gray-600 rounded-xl border "
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
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="">O Tipo de Serviço</span>{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        disabled={isPending}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger className="text-gray-600 rounded-xl border">
                            <SelectValue placeholder="Selecione o tipo de serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white dark:bg-gray-900 text-gray-600 rounded-xl">
                          <SelectItem value="web-development" className="py-2 cursor-pointer">
                            Desenvolvimento web
                          </SelectItem>
                          <SelectItem
                            value="mobile-development"
                            className="py-2 cursor-pointer"
                          >
                            Desenvolvimento apl. móveis
                          </SelectItem>
                          <SelectItem value="it-consulting" className="py-2 cursor-pointer">
                            Consultoria informática
                          </SelectItem>
                          <SelectItem value="other" className="py-2 cursor-pointer">
                            Outros serviços
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="">Como podemos ajudar?</span>{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        {...field}
                        placeholder="Deixe a sua mensagem aqui..."
                        rows={5}
                        className="text-gray-600 rounded-xl border"
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isSubscribed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isPending}
                        className="text-gray-600 border"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs">
                        Pretende receber notificações sobre novos projectos e
                        serviços da TECMOZA?
                      </FormLabel>
                      {/* <FormDescription>

</FormDescription> */}
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="flex gap-3 w-full bg-sky-500 hover:bg-sky-800 text-white rounded-xl"
            >
              {isPending && <Loader2 className="animate-spin h-5 w-5" />}
              Enviar
            </Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
