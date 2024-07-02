import React from 'react'
import styles from './_button.module.scss'

function Button({ type, value, className, onClick }) {

    return (
        <button type={type} className={styles[className]} onClick={onClick}>
            {value} 
        </button>
    )
}

export default Button