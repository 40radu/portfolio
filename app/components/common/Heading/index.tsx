import React from 'react'
import "./style.scss"
interface HeadingProps {
  label: string;
  description: string
}
function Heading(props: HeadingProps) {
  const { label, description } = props
  return (
    <div className='heading'>
      <h2>{label}<span></span></h2>
      <p>&quot; {description} &quot;</p>
    </div>
  )
}

export default Heading