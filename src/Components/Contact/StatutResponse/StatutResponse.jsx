import React from 'react'
import styles from './_statut.module.scss'
import successIcon from '../../../Icons/Statut/sent-succes.svg'
import errorIcon from '../../../Icons/Statut/sent-error.svg'
import Image from 'next/image'



function StatutResponse({ isSucces, onClick }) {
  return (
    <section className={styles.statut_resp}>
      <div className={styles.wrapper}>
        {/* {isSucces && 
        <p className={styles.succes}>sent successfully</p>}
        {isSucces && <p className={styles.error}>An error has occurred</p>} */}

        {isSucces === true ? <>
          <Image src={successIcon} alt='' />
          <h2 className={styles.succes}>Success</h2>
          <p className={styles.description}>Email sent successfully !</p></> :
          <>
            <Image src={errorIcon} alt='' />
            <h2 className={styles.error}>Error</h2>
            <p className={styles.description}>An error has occurred <br /> Try again !</p></>}



        <button onClick={onClick}>Ok</button>
      </div>
    </section>
  )
}

export default StatutResponse