"use server"

export async function handleForm(formData:FormData) {
  console.log(formData.get("name"))  
}