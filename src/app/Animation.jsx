"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './_animation.module.scss'

function Animation() {

  useGSAP(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    const bannerLeft = document.querySelector('#banner__left')
    const bannerRight = document.querySelector('#banner__right')

    gsap.to(bannerLeft, {
      yPercent: -2,
      yoyo: true,
      duration: 0.25,
      repeat: 1,
      ease: 'power3'
    })
    gsap.to(bannerLeft, {
      delay: 0.75,
      xPercent: -100,
      duration: 0.85,

    })
    gsap.to(bannerRight, {
      yPercent: 2 ,
      yoyo: true,
      duration: 0.25,
      repeat: 1,
      ease: 'power3'

    })
    gsap.to(bannerRight, {
      delay: 0.75,
      xPercent: 100,
      duration: 0.85,

    })

    body.style.overflow = 'auto'


  })

  return (
    <section className='overflow-hidden'>

      <div id='banner__left' className={`${styles.bannerLeft} min-h-screen backdrop-blur-sm bg-white fixed z-50 top-0 left-0 w-1/2 flex justify-end items-center`} style={{ fontSize: 55, fontWeight: 800, fontFamily: 'khula', paddingRight: 7.5}}>
        <p style={{ color: 'white' }}>Welcome To</p>
      </div>

      <div id='banner__right' className={`${styles.bannerRight} min-h-screen backdrop-blur-sm bg-slate-50 fixed z-50 top-0 left-1/2 w-1/2 text-red-500 flex justify-start items-center`} style={{ fontSize: 55, fontWeight: 800, paddingLeft: 7.5, fontFamily: "Khula"}}>
        <p style={{ backgroundImage: 'linear-gradient(to right, #1B197B, #FF0000)', backgroundSize: '100%', backgroundClip: 'text', color: 'transparent' }}>
          My Portfolio</p>
      </div>

    </section>

  )
}

export default Animation