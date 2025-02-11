import React from 'react'
import Icon, { IconType } from '../../Icon'
import "./style.scss"

export interface SkillItemProps {
  icon: keyof IconType,
  label: string
}

function SkillItem(props: SkillItemProps) {
  const { icon, label } = props
  return (
    <div className='skill-item'>
      <Icon name={icon} />
      <p>{label}</p>
    </div>
  )
}

export default SkillItem