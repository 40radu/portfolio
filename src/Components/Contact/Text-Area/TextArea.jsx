import React from 'react'
import styles from './_text_area.module.scss'
function TextArea({onChange}) {
  return (
    <textarea name="message" id="" placeholder='Message' className={styles.text_area} onChange={onChange}>
    </textarea>
  )
}

export default TextArea