import React from 'react'
import Button from '../../common/navigation/Button'
import "./style.scss"
import Image from 'next/image';
import Link from 'next/link';
export interface CardProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  tech: string[];
}

function CardProject(props: CardProjectProps) {
  const { title, description, imageSrc, link, tech } = props
  return (
    <div className='card-project'>
      <div className='card-project_image-cont'>
        <Image src={imageSrc} alt={title} width={500} height={500} />
      </div>
      <div className='card-project_text'>
        <h4>{title}</h4>
        <p>{description}</p>
        <ul>
          ({tech.map((t, i) =>
            <li key={`tech-${i}`}>{t}<span>-</span></li>)})
        </ul>
        <Link target='_blank' href={link}><Button label='Visiter' /></Link>
      </div>
    </div>
  )
}

export default CardProject