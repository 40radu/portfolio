'use client'

import React, { useEffect, useRef } from 'react'
import styles from './_mouse.module.scss'
import arrowDownIcon from '../../../Icons/Other/arrow-down.svg'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Mouse() {

  const mouse = useRef()

  // useGSAP(() => {
  //   // console.log('mande use Gsap')
  //   gsap.to(mouse.current, {
  //     yoyo: true,
  //     bottom: 80,
  //     delay: 0.25,
  //     duration: 1.5,
  //     // ease:'back',
  //     repeat: -1
  //   })

  //   document.addEventListener('scroll', () => {
  //     gsap.to(mouse.current, {
  //       opacity: 0,
  //       delay: 0.1,
  //       duration: 0.1
  //     })
  //   })

  //   document.addEventListener('scrollend', () => {
  //     gsap.to(mouse.current, {
  //       opacity: 1,
  //       delay: 1,
  //       duration: 0.5
  //     })
  //   })
  // }, {scope : mouse})

  return (
    <div className={styles.mouse_container} ref={mouse} >
      <Image src={arrowDownIcon} alt='' />
    </div>
  )
}

// TypeError: Cannot read properties of null (reading 'style')

export default Mouse