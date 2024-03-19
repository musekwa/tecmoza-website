"use server";
import * as z from "zod";
import { contactFormSchema } from "@/schemas";


export const contact = async (values: z.infer<typeof contactFormSchema>)=>{

    const validatedFields = contactFormSchema.safeParse    (values);
    if (!validatedFields.success){
        return {
            error: "A sua mensagem não foi enviada. Por favor, verifique os dados e tente novamente."
        }
    }

    return {
        success: "A sua mensagem foi enviada. Em breve receberá uma resposta ao seu email. Obrigado!",
    }
}