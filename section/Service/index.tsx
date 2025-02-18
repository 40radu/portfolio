"use client"
import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import ServiceItem from '@/app/components/display/ServiceItem'
import "./style.scss"
import { dataService } from './data'
import { useGSAP } from '@gsap/react'
import { changeBg } from '@/app/animation/changeBg'



function Service() {
  useGSAP(() => {
    changeBg({ newBackground: "boss.png", startData: "top 70%", triggerData: `.service .heading`, prevBackground: "Hero-girls.png" })
  })
  return (
    <Container className='service' id='h-section' key="service">
      <Heading label='Services' description='Voici un aperçu des services que je peux offrir pour votre projet.' />
      <ul className='service_content'>
        {
          dataService.map((dt, id) => {
            return <ServiceItem key={`dt-${id}`} service={dt.service} title={dt.title} icon={dt.icon} />
          })
        }
      </ul>
    </Container>
  )
}

export default Service