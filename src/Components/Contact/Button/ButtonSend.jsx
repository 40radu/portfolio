import React from 'react'
import styles from "./_buttonSend.module.scss"
import iconSend from '../../../Icons/Button/send_email.svg'
import Image from 'next/image'
function ButtonSend({content , isSendNotLoading, disabled}) {
  return (
    <button type='submit' className={styles.btn_send} disabled={disabled}>
      <p>{content}</p>
      {isSendNotLoading && <Image src={iconSend} alt='' />}
    </button>
  )
}

export default ButtonSend