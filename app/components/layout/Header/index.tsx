"use client"
import React, { useState } from 'react'
import Logo from '../../common/Logo'
import Container from '../../common/Container'
import "./style.scss"
import Button from '../../common/navigation/Button'
import Link from 'next/link'
import { linksData } from './data'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen, "ilay state menu")
  }
  const pathname = usePathname()
  return (
    <header className='header'>
      <Container tag='div' className='header__content'>
        <Logo />
        <nav className='header__content-nav'>
          {linksData.map((link, id) => (
            <Link key={`link-${id}`} href={link.href} className={classNames("link", { link_active: pathname == link.href })}>{link.label}</Link>
          ))}
        </nav>
        <nav className={classNames("header__content-nav_mobile", { active: isMenuOpen })}>
          {linksData.map((link, id) => (
            <Link key={`link-${id}`} href={link.href} className={classNames("link", { link_active: pathname == link.href })}>{link.label}</Link>
          ))}
          <Button label='Contact' />
        </nav>
        <div className={classNames("header__content-menu", { active: isMenuOpen })} onClick={handleMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Button label='Contact' className='button'/>
      </Container>
    </header>
  )
}

export default Header