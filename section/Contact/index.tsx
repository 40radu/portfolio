import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import React from 'react'
import "./style.scss"
import Icon from '@/app/components/Icon'
import FormContact from '@/app/components/display/FormContact'
import { contactInfoData } from './data'

function Contact() {
  return (
    <Container className='contact' id='h-section'>
      <Heading description='Vous trouverez ci-après mes coordonnées' label='Contact' />
      <div className='contact_content'>
        <ul className='contact_content--infos'>
          {
            contactInfoData.map((dt, id) => (
              <li key={`info-${id}`}>
                <Icon name={dt.icon} />
                <p>{dt.label}</p>
              </li>
            ))
          }
        </ul>
        <FormContact />
      </div>
    </Container>
  )
}

export default Contact