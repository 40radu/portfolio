"use client"
import CardProject from '@/app/components/card/CardProject'
import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import React from 'react'
import "./style.scss"
import { dataProjectList } from './data'
import { useGSAP } from '@gsap/react'
import { changeBg } from '@/app/animation/changeBg'

function Project() {
  useGSAP(() => {
      changeBg({ newBackground: "projet.png", startData: "top 70%", triggerData: `.project`, prevBackground: "cesar.png" })
    })
  return (
    <Container className='project' id='h-section'>
      <Heading label='Projet' description='Quelque projet déjà réalisé' />
      <div className="project_content">
        {dataProjectList.map((data, id) => (
          <CardProject key={`project--${id}`} {...data} />
        ))}
      </div>
    </Container>
  )
}

export default Project