"use client";
import React, { useEffect, useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../../../schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonalIcon } from "lucide-react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { contact } from "@/actions/contact";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

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

  useEffect(()=>{
    if (error) {
      toast.error('A sua mensagem não foi enviada.');
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    if (success) {
      toast.success('A sua mensagem foi enviada.');
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
  }, [error, success])

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      contact(values)
        .then((data)=> {
          if (data.success) {
            setSuccess(data.success);
            form.reset();
           
          } else {
            setError(data.error);
          }
        })
    });
  };
  return (
    <div className="w-full bg-white p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <div className="space-x-4 flex justify-between">
            <div className="w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="O seu nome"
                        type="text"
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]"  />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="O seu nome"
                        type="text"
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]"  />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-x-4 flex justify-between">
            <div className="w-full">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Empresa</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="O nome da sua empresa"
                        type="text"
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]"  />
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
                    <FormLabel>Website da empresa</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="O website da sua empresa"
                        type="text"
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]"  />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-x-4 flex justify-between">
            <div className="w-full">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de Telefone</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="O seu número de telefone"
                        type="number"
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]"  />
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
                    <FormLabel>O Tipo de Serviço </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de serviço" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="web-development" className="py-2">
                          Desenvolvimento de aplicativos web
                        </SelectItem>
                        <SelectItem value="mobile-development" className="py-2">
                          Desenvolvimento de aplicativos móveis
                        </SelectItem>
                        <SelectItem value="it-consulting" className="py-2">
                          Consultoria informática
                        </SelectItem>
                        <SelectItem value="other" className="py-2">Outros serviços</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-x-4 flex justify-between">
            <div className="w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Como podemos ajudar?</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        {...field}
                        placeholder="Deixe a sua mensagem aqui..."
                        rows={8}
                      />
                    </FormControl>
                    {/* <FormDescription>
                                Please enter your name
                            </FormDescription> */}
                    <FormMessage className="text-[10px]"  />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isSubscribed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
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
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="flex gap-3 w-fit bg-sky-500"
          >
            Enviar <SendHorizonalIcon className="w-5 h-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
