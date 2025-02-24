import React from 'react'
import Button from '../../common/navigation/Button'
import "./style.scss"
import Image from 'next/image';
export interface CardProjectProps {
  title: string;
  description: string;
  imageSrc : string
}

function CardProject(props: CardProjectProps) {
  const { title, description , imageSrc} = props
  return (
    <div className='card-project'>
      <div className='card-project_image-cont'>
        <Image src={imageSrc} alt={title} width={500} height={500} />
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