
"use client"
import React from 'react'
import Input from '../../common/Input'
import Textarea from '../../common/Textarea'
import Button from '../../common/navigation/Button'
import "./style.scss"
import { handleForm } from './action'

function FormContact() {
  // const [isFormDone, setIsFormDone] = useState<boolean>(false)

  return <form action={handleForm} className='form-contact'>
    <Input name='name' placeholder='Nom' />
    <Input name='email' placeholder='Email' type='email' />
    <Textarea name='message' placeholder='Message' />
    <Button label='Envoyer' type='submit' />
  </form>
}

export default FormContact