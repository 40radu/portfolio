import React from 'react'
import "./style.scss"
import NextJs from './NextJs'
import Tailwind from './Tailwind'
import Typescript from './Typescript'
import Javascript from './Javascript'
import Git from './Git'
import Figma from './Figma'
import Vue from './Vue'
import ReactJs from './ReactJs'
import Sass from './Sass'


const icon = {
  next: <NextJs />,
  tailwind: <Tailwind />,
  typescript: <Typescript />,
  javascript: <Javascript />,
  git: <Git />,
  figma: <Figma />,
  vue : <Vue/>,
  react : <ReactJs/>,
  sass : <Sass/>
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