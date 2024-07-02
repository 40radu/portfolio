"use client"


import React, { useEffect } from 'react'
import styles from './_navBar.module.scss'
import Logo from '@/Components/Logo/Logo'
import MenuBar from '@/Components/MenuBar/MenuBar'
// import Link from 'next/link'

function NavBar() {

    // useEffect(()=>{
    //         // window.addEventListener('click', (e)=>{
    //             //     console.log(e)
    //             // })
    //         console.log('mande')
    // }, [])

  return (
    <nav className={styles.navBar_container}>
        <Logo/>
        {/* <Link href={'#about'}>home</Link>
        <Link>about</Link>
        <Link>skills</Link>
        <Link>contact</Link> */}


        <MenuBar/>
    </nav>
  )
}

export default NavBar