import React from 'react'
import "./style.scss"
interface InputProps {
  className?: string;
  placeholder: string;
  name: string;
  type?: "text" | "email"
}

function Input(props: InputProps) {
  const { placeholder, className = "", name, type = "text" } = props
  return (
    <div className={`common-input ${className}`}>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Input