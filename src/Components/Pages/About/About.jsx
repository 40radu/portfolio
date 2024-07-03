"use client"

import React, { useRef } from 'react'
import styles from './_about.module.scss'
import Title from '@/Components/Global/Title/Title'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitText } from '@/utils/splitText';



function About() {
    const title_about = useRef()
    const about_section = useRef()
    const titleDescription = useRef()

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)


        // T E X T D E S C R I P T I O N

        const textDescription = document.querySelectorAll(`.${styles.more_description} p`)

        // gsap.set ( textDescription, {xPercent: -100})
        gsap.from(textDescription, {
            scrollTrigger :{
                // markers : true, 
                trigger:textDescription,
                start:"top 65%", 
                endTrigger:about_section.current,
                toggleActions : 'restart none none reverse',
                end:'bottom 65%',
                // scrub:1,
            }, 
            xPercent : -100,
            delay:0.1,
            duration:0.75,
            stagger :0.25,
            opacity : 0

        })

        gsap.to (about_section.current , {
            scrollTrigger : {
                trigger : about_section.current, 
                start : '20% top',
                end: '50% top',
                // markers: true, 
                scrub : 1
            }, 
            opacity : 0,
            duration : 5, 
            delay: 1.5,   
        })

    }, {scope : about_section})


    return (
        <section className={styles.about_section} ref={about_section} id='about'>
            <Title
                underTitle={'Self-summary'}
                title={'about'}
                description={'[[ HERE,  DISCOVER MY PERSONAL PROFILE  ]]'} 
                refTitle={title_about}
                refDescription={titleDescription}
                />

            <div className={styles.more_description}>
                <p className='text-description'>Each new challenge is an opportunity for me to grow and improve.
                    My goal is to create intuitive and high-performing user experiences.
                    Feel free to contact me to explore new collaborations!</p>

                <p className='text-description'>Passionate about innovation and technology, I am a developer specializing in creating web and mobile solutions.
                    Since 2023, I have focused my efforts on front-end development, mastering various
                    languages and frameworks. </p>

            </div>
        </section>
    )
}

export default About