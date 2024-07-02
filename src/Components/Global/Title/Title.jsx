import React, { useRef } from 'react'
import styles from './_title.module.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { splitText } from '@/utils/splitText'
// function Title({ title, underTitle, description, refTitle , refDescription}) {
function Title({ title, description, underTitle }) {

  const refTitle = useRef()
  const refDescription = useRef()
  useGSAP(() => {
    //TITLE ANIMATION
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(refTitle.current, {
      scrollTrigger: {
        // markers: true,
        trigger: refTitle.current,
        start: "top 85%",
        end: 'top 30%',
        scrub: true
      },
      width: "80vw",
    })

    // TITILE DESCRIPTION ANIMATION
    const titleDescription = refDescription.current
    splitText(refDescription.current)
    const chars = titleDescription.querySelectorAll(`span`)

    const tl = gsap.timeline()
    tl.from(chars, {
      scrollTrigger: {
        // markers: true,
        trigger: chars,
        endTrigger: refTitle.current,
        start: 'top 85%',
        end: 'top 40%',
        scrub: true,
      },
      opacity: 0,
      stagger: 0.25,
    })

  })
  return (
    <>
      <div className={styles.section_title} >
        <h2 ref={refTitle}>
          {title}
        </h2>
        <div className={styles.section_title__center}>
          <p>{underTitle}</p>
        </div>
        <p className={styles.descri} ref={refDescription}>{description}</p>
      </div>
    </>
  )
}

export default Title