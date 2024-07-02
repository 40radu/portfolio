"use client"

import React, { useRef } from 'react'
import styles from './_Logo.module.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'

function Logo() {

  const logoTop = useRef()
  const logoBottom = useRef()

  useGSAP(()=>{
    gsap.set(logoTop.current , {xPercent:-100});
    gsap.set(logoBottom.current , {xPercent:-100})

    gsap.to(logoTop.current, {
      xPercent:0,
      duration:0.75,
      display: "flex",
      delay:1
    })

    gsap.to(logoBottom.current, {
      xPercent:0,
      duration:0.75,
      display: "flex",
      delay:1

    })

  })

  return (
    <Link href={'#home'} className={styles.logo} >
        <p className={styles.logo__top} ref={logoTop} >Portfolio</p>
        <p className={styles.logo__bottom} ref={logoBottom} >Radonirina</p>
    </Link>
  )
}

export default Logo