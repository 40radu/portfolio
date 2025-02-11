import React from 'react'
import "./style.scss"

function Background() {
  return (
    <div className='background'>
      {
        Array(40).fill(null).map((_, id) => {
          return <span className='rect' key={id}></span>
        })
      }
    </div>
  )
}

export default Background