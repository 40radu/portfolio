
"use client"
import React, { useActionState } from 'react'
import Input from '../../common/Input'
import "./style.scss"
import { rado } from './action'
import Textarea from '../../common/Textarea'
import Button from '../../common/navigation/Button'

interface IState {
  errors: {
    message?: string[] | undefined;
    name?: string[] | undefined;
    email?: string[] | undefined;
  };
  preField: {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
  };
  succes?: undefined;
}

const initialState: IState = {
  errors: {
  },
  preField: {
    name: "rado",
    email: "rado@gmail.com",
    message: "message ito"
  }, 
}

function FormContact() {
  const [state, formAction] = useActionState(rado, initialState)

  return <form action={formAction} className='form-contact'>
    <fieldset>
      <Input name='name' placeholder='Nom' defaultValue={state?.preField?.name as string} />
      <p className={state?.errors?.name && "error"}>*minimum 4 lettres sans chiffres</p>
    </fieldset>
    <fieldset>
      <Input name='email' placeholder='Email' type='email' defaultValue={state?.preField?.email as string} />
      {state?.errors?.email && <p className='error'>{state?.errors.email}</p>}
    </fieldset>
    <fieldset>
      <Textarea name='message' placeholder='Message' defaultValue={state?.preField?.message as string} />
    </fieldset>
    <Button label='Envoyer' type='submit' />
    <p className='text-white'>message done ? : {state?.response?.message}</p>
  </form>
}

export default FormContact