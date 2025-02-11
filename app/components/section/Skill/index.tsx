import React from 'react'
import Heading from '../../common/Heading'
import Container from '../../common/Container'
import "./style.scss"
import { dataSkillFird, dataSkillFirst, dataSkillFour, dataSkillSecond } from './data'
import SkillItem from '../../display/SkillItem'

function Skill() {
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
        <li>
          {
            dataSkillFird.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
        <li>
          {
            dataSkillFour.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
        <li>
          {
            dataSkillFirst.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
      </ul>
    </Container>
  )
}

export default Skill