import React from 'react'
import "./style.scss"
import NextJs from './NextJs'
import Tailwind from './Tailwind'
import Typescript from './Typescript'
import Javascript from './Javascript'
import Git from './Git'
import Figma from './Figma'
import Vue from './Vue'
import Sass from './Sass'
import Ux from './Ux'
import Balise from './Balise'
import Email from './Email'
import Location from './Location'
import Whatsapp from './Whatsapp'
import Redux from './Redux'
import ReactJs from './ReactJs'
import Gsap from './Gsap'
import Html from './Html'


const icon = {
  next: <NextJs />,
  tailwind: <Tailwind />,
  typescript: <Typescript />,
  javascript: <Javascript />,
  git: <Git />,
  figma: <Figma />,
  vue: <Vue />,
  redux: <Redux/>,
  sass: <Sass />,
  ux: <Ux />,
  balise: <Balise />,
  email: <Email />,
  location: <Location />,
  whatsapp: <Whatsapp />,
  react : <ReactJs/>,
  gsap : <Gsap/>,
  html : <Html/>
}

export type IconType = typeof icon
export type IconVariant = "yellow"

type IconProps = {
  variant?: IconVariant,
  name: keyof IconType,
  className?: string
}

function Icon(props: IconProps) {
  const { variant = "yellow", name, className = "" } = props
  return (
    <span className={`icon icon_${variant} ${className}`}>
      {icon[name]}
    </span>
  )
}

export default Icon