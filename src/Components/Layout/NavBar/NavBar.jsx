"use client"

import React, { useEffect, useState } from 'react'
import styles from './_navBar.module.scss'
import Logo from '@/Components/Logo/Logo'
import MenuBar from '@/Components/MenuBar/MenuBar'

function NavBar() {
  
  return (
    <nav className={styles.navBar_container} >
        <Logo/>
        <MenuBar/>
    </nav>
  )
}

export default NavBar