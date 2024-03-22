import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Informe o seu nome" }),
  email: z.string().email({ message: "Informe um email valido" }),
  phone: z.string().min(9, { message: "Informe o seu número de celular" }),
  companyName: z.optional(z.string()),
  companyWebsite: z.optional(z.string()),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z.string().min(10, { message: "Deixe sua mensagem" }),
  isSubscribed: z.boolean().default(false),
});

export const userSubscriptionSchema = z.object({
  name: z.string().min(1, { message: "Informe o seu nome" }),
  email: z.string().email({ message: "Por favor, indique um email válido" }),
});
