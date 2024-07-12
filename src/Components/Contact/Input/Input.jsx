import React from 'react'
import styles from './_input.module.scss'
import Image from 'next/image'
import userIcon from '../../../Icons/InputIcon/user.svg'
import emailIcon from '../../../Icons/InputIcon/email.svg'



function Input({placeholder, name, type, onChange, defaultValue}) {
  return (
    <label className={styles.input_container}>
        <Image src={placeholder === "email"?emailIcon:userIcon} alt=''/>
        <input type={type} placeholder={placeholder} name={name} onChange={onChange} value={defaultValue} />
    </label>
  )
}

export default Input