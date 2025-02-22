"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string({ invalid_type_error: "nom invalide" })
    .min(4, { message: "4 lettres minimum" })
    .regex(/^[a-zA-Z-\s]+$/, { message: "chiffres non autorisés" }),
  email: z.string({ invalid_type_error: "email invalide" })
    .regex(/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/, { message: "email invalide" }),
  message: z.string().min(1, { message: "champ vide" })
})

export async function rado(prev: unknown, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  }
  const validatedFields = schema.safeParse({ ...data })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      preField: data
    }
  }
  // SUCCESS
}