"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './_menu-bar.module.scss';
import burger_menu from '../../Icons/Menu-Bar/menu-burger.svg'
import close_menu from '../../Icons/Menu-Bar/close_menu.svg'
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import NavLink from './NavLink';


function MenuBar() {

  const [menu, setMenu] = useState('Menu')
  const [icon, setIcon] = useState(burger_menu)
  const containerMenuButton = useRef(null)
  const textButtonMenu = useRef(null)

  function handleClickMenu() {
    const body = document.querySelector('body')
    const navBar = document.querySelector(`.${styles.containerNavigation}`)
    const navLink = document.querySelectorAll(`.${styles.containerNavigation} a`)

    if (menu === 'Menu') {
      body.style.overflow = 'hidden'
      gsap.to(navBar, {
        right:"0",
        duration: 0.65,
        delay: 0.25,
        // ease: 'back'

      });
      gsap.from(navLink, {
        ease: 'back',
        marginRight: '16%',
        duration: 0.35,
        delay: 0.95,
        letterSpacing: '0'
      })
    } else {
      body.style.overflow = 'auto'  
      gsap.to(navBar, {
        right: '-102%',
        duration: 0.75,
        delay: 0.5,
      })
    }

    setTimeout(() => {
      setMenu(`${menu === 'Menu' ? "Close" : "Menu"}`)
      setIcon(icon === burger_menu ? close_menu : burger_menu)
    },200)
  }

  function handleMouseEnterMenu() {
    gsap.to(containerMenuButton.current, {
      delay: 0.10,
      duration: 0.25,
      opacity: '0.75',
      ease: 'elastic'
    })
    gsap.to(textButtonMenu.current, {
      scale: '0.9',
      duration: 0.35,
    })
  }

  function handleMouseLeaveMenu() {
    gsap.to(containerMenuButton.current, {
      delay: 0.10,
      duration: 0.25,
      opacity: '0.9'
    })
    gsap.to(textButtonMenu.current, {
      scale: '0.8',
      duration: 0.15

    })
  }

  return (
    <>

      <div className={styles.menu_bar} onClick={handleClickMenu} ref={containerMenuButton} onMouseEnter={handleMouseEnterMenu} onMouseLeave={handleMouseLeaveMenu}>
        <p ref={textButtonMenu}>{menu}</p>
        <Image src={icon} alt='menu_icon' />
      </div>

       <nav className={styles.containerNavigation}>
        <NavLink href={'#home'} text={'home'} onClick={handleClickMenu} />
        <NavLink href={'#about'} text={'about'} onClick={handleClickMenu} />
        <NavLink href={'#skills'} text={'skills'} onClick={handleClickMenu} />
        <NavLink href={'#contact'} text={'project'} onClick={handleClickMenu} />
        <NavLink href={'#contact'} text={'contact'} onClick={handleClickMenu} />

      </nav>

    </>
  )
}

export default MenuBar