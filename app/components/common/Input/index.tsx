import React from 'react'
import "./style.scss"
interface InputProps {
  className?: string;
  placeholder: string;
  name :string
}

function Input(props: InputProps) {
  const { placeholder, className = "" , name} = props
  return (
    <div className={`common-input ${className}`}>
      <input type="text" placeholder={placeholder} name={name}/>
    </div>
  )
}

export default Input