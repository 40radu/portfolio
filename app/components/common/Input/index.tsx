import React from 'react'
import "./style.scss"
interface InputProps {
  className?: string;
  placeholder: string;
  name: string;
  type?: "text" | "email";
  defaultValue?: string
}

function Input(props: InputProps) {
  const { placeholder, className = "", name, type = "text", defaultValue = "" } = props
  return (
    <div className={`common-input ${className}`}>
      <input type={type} placeholder={placeholder} name={name} defaultValue={defaultValue} required/>
    </div>
  )
}

export default Input