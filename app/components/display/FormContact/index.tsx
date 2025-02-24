
"use client"
import React, { useActionState, useEffect } from 'react'
import Input from '../../common/Input'
import "./style.scss"
import { rado } from './action'
import Textarea from '../../common/Textarea'
import Button from '../../common/navigation/Button'
import { ToastContainer } from 'react-toastify'
import { showToast } from '@/utils/toast'

const initialState = {
  errors: {
  },
  preField: {
    name: "",
    email: "",
    message: ""
  },
}

function FormContact() {
  const [state, formAction] = useActionState(rado, initialState)

  useEffect(() => {
    if (state?.status == "error") {
      showToast(false)
    }
    if (state?.status == "succes") {
      showToast(true)
    }
  }, [state?.status])

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
    <p className='text-white'>message done ? :</p>
    <ToastContainer />
  </form>
}

export default FormContact