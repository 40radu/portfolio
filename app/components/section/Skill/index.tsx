"use client"
import React from 'react'
import Heading from '../../common/Heading'
import Container from '../../common/Container'
import "./style.scss"
import { dataSkillFirst, dataSkillSecond } from './data'
import SkillItem from '../../display/SkillItem'
import { useGSAP } from '@gsap/react'
import { changeBg } from '@/app/animation/changeBg'

function Skill() {
  useGSAP(() => {
    changeBg({ newBackground: "Hero-girl.png", startData: "top 80%", triggerData: ".skill", prevBackground: "11.png" })
  })
  return (
    <Container className='skill'>
      <Heading description='Vous trouverez ci-après la liste de mes compétence' label='Compétences' />
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