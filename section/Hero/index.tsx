"use client"
import Container from '@/app/components/common/Container'
import Button from '@/app/components/common/navigation/Button'
import React from 'react'
import "./style.scss"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'

function Hero() {
  useGSAP(() => {
    gsap.from(".hero", {
      opacity: 0,
      duration: 0.75,
      delay: 2,
      ease: "sine"
    })
  })
  return (
    <Container className='hero' id='h-section'>
      <p className='hero_name' data-scroll data-scroll-speed="0.05">Radonirina</p>
      <h2 className='hero_welcome'>Bienvenue sur mon <span className='yellow'>portfolio !</span></h2>
      <h1 className='title'><span className='yellow'>Développeur Web</span> et <span className='yellow'>Designer</span> </h1>
      <p className='hero_description'>&quot; Développeur passionné, je crée des expériences web modernes et performantes, en alliant design et performance pour des interfaces intuitives et réactives ! &quot;</p>
      <Link href="/cv.pdf" ><Button label='Télécharger mon Cv' /></Link>
    </Container>
  )
}

export default Hero