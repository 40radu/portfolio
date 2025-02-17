import React from 'react'
import Input from '../../common/Input'
import Textarea from '../../common/Textarea'
import Button from '../../common/navigation/Button'
import "./style.scss"

function FormContact() {
  return <form action="" className='form-contact'>
    <Input name='name' placeholder='Nom' />
    <Input name='email' placeholder='Email' />
    <Textarea name='message' placeholder='Message' />
    <Button label='Envoyer' type='submit' />
  </form>
}

export default FormContact