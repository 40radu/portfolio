import React from 'react'
import "./style.scss"
interface TextareaProps {
  className?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
}

function Textarea(props: TextareaProps) {
  const { placeholder, className = "", name, defaultValue = "" } = props
  return (
    <div className={`common-textarea ${className}`}>
      <textarea name={name} id="" placeholder={placeholder} defaultValue={defaultValue} required></textarea>
    </div>
  )
}

export default Textarea