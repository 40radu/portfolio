import CardProject from '@/app/components/card/CardProject'
import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import React from 'react'
import "./style.scss"
import { dataProjectList } from './data'

function Project() {
  return (
    <Container className='project' id='h-section'>
      <Heading label='Projet' description='Quelques projets déjà réalisés' />
      <div className="project_content">
        {dataProjectList.map((data, id) => (
          <CardProject key={`project--${id}`} {...data} />
        ))}
      </div>
    </Container>
  )
}

export default Project