import React from 'react'
import "./style.scss"
import Container from '@/app/components/common/Container'

function Footer() {
  return (
    <Container tag='footer' className='footer'>
      <p>réalisé par <span>Radonirina</span><span className="yellow"></span></p>
    </Container>
  )
}

export default Footer