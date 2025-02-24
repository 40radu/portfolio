"use server"

import { z } from "zod"
import { Resend } from 'resend'

const resendInstance = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string({ invalid_type_error: "nom invalide" })
    .min(4)
    .regex(/^[a-zA-Z-\s]+$/),
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
  // SUCCESS FIELDS
  const resp = await resendInstance.emails.send({
    from: "onboarding@resend.dev",
    subject: "Contact from portfolio",
    to: "radurakotoarivelo@gmail.com",
    text: `${data.email} : ${data.message}`,
    replyTo: data.email as string
  })

  console.log(resp)
  if (resp.data == null) {
    return {
      status: "error",
      preField: data
    }
  } else {
    return {
      status : "succes"
    }
  }
}