'use client'

import React, { useEffect, useRef } from 'react'
import styles from './_mouse.module.scss'
import arrowDownIcon from '../../../Icons/Other/arrow-down.svg'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Mouse() {

  const mouse = useRef()

  useGSAP(() => {
    gsap.to(mouse.current, {
      yoyo: true,
      bottom: 80,
      delay: 0.2,
      duration: 1.35,
      repeat: -1
    })
  }, {scope : mouse})

  return (
    <div className={styles.mouse_container} ref={mouse} >
      <Image src={arrowDownIcon} alt='' />
    </div>
  )
}

// TypeError: Cannot read properties of null (reading 'style')

export default Mouse