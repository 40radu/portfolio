import Container from '@/app/components/common/Container'
import Button from '@/app/components/common/navigation/Button'
import React from 'react'
import "./style.scss"

function Hero() {
  return (
    <Container className='hero' id='h-section'>
      <p className='hero_name'>Radonirina</p>
      <h2 className='hero_welcome'>Bienvenue sur mon <span className='yellow'>portfolio !</span></h2>
      <h1><span className='yellow'>Développeur Web</span> et <span className='yellow'>Designer</span> </h1>  
      <p className='hero_description'>&quot; Développeur passionné, je crée des expériences web modernes et performantes, en alliant design et performance pour des interfaces intuitives et réactives ! &quot;</p>
      <Button label='Télécharger mon Cv' />
    </Container>
  )
}

export default Hero