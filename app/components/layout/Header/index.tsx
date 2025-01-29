"use client"
import React from 'react'
import Logo from '../../common/Logo'
import Container from '../../common/Container'
import "./style.scss"
import Button from '../../common/navigation/Button'
import Link from 'next/link'
import { linksData } from './data'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'


function Header() {
  const pathname = usePathname()
  return (
    <header className='header__bg'>
      <Container tag='div' className='header__content'>
        <Logo />
        <nav className='header__content-nav'>
            {linksData.map((link, id)=>(
              <Link key={`link-${id}`} href={link.href} className={classNames("link", { active: pathname == link.href })}>{link.label}</Link>
            ))}
        </nav>
        <Button label='Contact'/>
      </Container>
    </header>
  )
}

export default Header