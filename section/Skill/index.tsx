"use client"
import React from 'react'
import { dataSkillFirst, dataSkillSecond } from './data'
import { useGSAP } from '@gsap/react'
import { changeBg } from '@/app/animation/changeBg'
import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import SkillItem from '@/app/components/display/SkillItem'
import "./style.scss"

function Skill() {
  useGSAP(() => {
    changeBg({ newBackground: "Hero-girl.png", startData: "top 80%", triggerData: ".skill", prevBackground: "11.png" })
  })
  return (
    <Container className='skill'>
      <Heading description='Découvrez mes compétences pour donner vie à vos idées numériques.' label='Compétences' />
      <ul className='skill_content'>
        <li>
          {
            dataSkillFirst.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
        <li>
          {
            dataSkillSecond.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
      </ul>
    </Container>
  )
}

export default Skill