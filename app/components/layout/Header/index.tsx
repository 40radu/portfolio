"use client"
import React, { useEffect, useState } from 'react'
import Logo from '../../common/Logo'
import Container from '../../common/Container'
import "./style.scss"
import Button from '../../common/navigation/Button'
import { linksData } from './data'
import classNames from 'classnames'
import { scrollTo } from '@/utils/scrollTo'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const goTo = (link: string) => {
    handleMenuOpen()
    scrollTo(link)
  }
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("#h-section");
    const links = document.querySelectorAll(".link")
    const buttons = document.querySelectorAll(".header button")
    function todo(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            const data = link.getAttribute("data-link")
            if (data == entry.target.classList[1]) {
              link.classList.add("active")
            } else {
              link.classList.remove("active")
            }
          })
          if (entry.target.classList[1] == "contact") {
            buttons.forEach(btn => {
              btn.classList.add("active")
            })
          } else {
            buttons.forEach(btn => {
              btn.classList.remove("active")
            })
          }
        }
      });
    }
    const observer = new IntersectionObserver(todo, {
      rootMargin: "0px",
      threshold: 0.5,
    });
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <header className='header'>
      <Container tag='div' className='header__content'>
        <Logo />
        <nav className='header__content-nav'>
          {linksData.map((link, id) => (
            <li key={`link-${id}`} data-link={link.id} className="link" onClick={() => goTo(link.id)}>{link.label}</li>
          ))}
        </nav>
        <nav className={classNames("header__content-nav_mobile", { active: isMenuOpen })}>
          {linksData.map((link, id) => (
            <li key={`link-${id}`} data-link={link.id} className="link" onClick={() => goTo(link.id)}>{link.label}</li>
          ))}
          <Button label='Contact' onClick={(() => goTo("contact"))} />
        </nav>
        <div className={classNames("header__content-menu", { active: isMenuOpen })} onClick={handleMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Button label='Contact' className='button' onClick={(() => goTo("contact"))} />
      </Container>
    </header>
  )
}

export default Header