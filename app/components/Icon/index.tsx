import React from 'react'
import "./style.scss"
import NextJs from './NextJs'


const icon = {
  next: <NextJs />
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