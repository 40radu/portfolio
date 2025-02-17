import React from 'react'
import "./style.scss"
interface TextareaProps {
  className?: string;
  placeholder: string;
  name :string
}

function Textarea(props: TextareaProps) {
  const { placeholder, className = "" , name} = props
  return (
    <div className={`common-textarea ${className}`}>
      <textarea name={name} id="" placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea