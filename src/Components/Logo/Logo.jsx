"use client"

import React, { useRef } from 'react'
import styles from './_Logo.module.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import logoMobile from '../../Icons/Logo/logo-mobile.svg'


import Image from 'next/image'

function Logo() {

  return (
    <Link href={'#home'} className={styles.logo} >
        <p className={styles.logo__top}>Portfolio</p>
        <p className={styles.logo__bottom} >Radonirina</p>
        <Image src={logoMobile} alt='logo'/>
    </Link>
  )
}

export default Logo