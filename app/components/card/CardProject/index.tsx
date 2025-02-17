import React from 'react'
import Button from '../../common/navigation/Button'
import "./style.scss"
export interface CardProjectProps {
  title: string;
  description: string;
}

function CardProject(props: CardProjectProps) {
  const { title, description } = props
  return (
    <div className='card-project'>
      <div className='card-project_image-cont'>
      </div>
      <div className='card-project_text'>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button label='Visiter' />
      </div>
    </div>
  )
}

export default CardProject