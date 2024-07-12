"use client"

import React, { useRef, useState } from 'react'
import styles from './_skills.module.scss'
import Title from '@/Components/Global/Title/Title'
import LogoSkills from '@/Components/Skills/LogoSkills/LogoSkills'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { splitText } from '@/utils/splitText'
import gsap from 'gsap'
// import { Timeline } from 'gsap/gsap-core'

function Skills() {
    const skillsSection = useRef()
    const titleDescription = useRef()
    const logoWrapper = useRef()


    const containerBottomLogo = useRef()
    const btn_showMore = useRef()
    const [valueButton, setValueButton] = useState('View More')

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        //logo
        const sectionSkill = skillsSection.current
        const logoSectionFirst = sectionSkill.querySelectorAll(`.${styles.top} div`)
        const logoSectionCenter = sectionSkill.querySelectorAll(`.${styles.center} div`)
        const logoSectionBottom = sectionSkill.querySelectorAll(`.${styles.bottom} div`)

        function initAnimation(element, valueStartWindow) {
            gsap.from(element, {
                scrollTrigger: {
                    // markers: true,
                    trigger: element,
                    // trigger: skillsSection.current,
                    start: `top ${valueStartWindow}`,
                    toggleActions: 'restart none none reverse',
                    // endTrigger: skillsSection.current,
                    end: 'top, top',
                    // scrub: 1
                },
                scale : 0,
                duration: 0.55,
                stagger: 0.10,
                opacity: 0,
            })
        }

        initAnimation(logoSectionFirst, '72%')
        initAnimation(logoSectionCenter, '72%')
        initAnimation(logoSectionBottom, '74%')

        gsap.to(skillsSection.current, {
            scrollTrigger: {
                markers: true, 
                trigger: skillsSection.current,
                start: '85% top',
                scrub: 1
            },
            opacity: 0.25,
        })

    }, { scope: skillsSection })

    function handleBtnSeeMore() {
        const containerBottom = containerBottomLogo.current
        if (valueButton === 'View More') {
            containerBottom.style.display = 'flex'
            setValueButton('View Less')
        } else {
            containerBottom.style.display = 'none'
            setValueButton('View More')

        }

    }


    return (
        <section className={styles.skills_section} id='skills' ref={skillsSection}>
            <Title
                description={'[[ HERE, YOU WILL SEE A LIST OF MY SKILLS ]]'}
                title={"skills"}
                underTitle={'competencies'}
                refDescription={titleDescription}
            />

            <div className={styles.skills_containers}>

                <div className={styles.top}>
                    <LogoSkills icon={'html'} refLogoContainer={logoWrapper} />
                    <LogoSkills icon={'react'} />
                    <LogoSkills icon={'typescript'} />
                    <LogoSkills icon={'nextjs'} />

                </div>

                <div className={styles.center}>
                    <LogoSkills icon={'tailwind'} />
                    <LogoSkills icon={'javascript'} />
                    <LogoSkills icon={'sass'} />
                    <LogoSkills icon={'figma'} />

                </div>

                <div className={styles.bottom} ref={containerBottomLogo}>
                    <LogoSkills icon={'css'} />
                    <LogoSkills icon={'git'} />
                    <LogoSkills icon={'gitHub'} />
                    <LogoSkills icon={'gsap'} />

                </div>

                <button onClick={handleBtnSeeMore} className={styles.btn_showMore} ref={btn_showMore}>{valueButton}</button>
            </div>
        </section>
    )
}

export default Skills