"use client"

import styles from './_dashboard.module.scss'
import Button from '@/Components/Global/Button/Button'
import image from '../../../app/Image/homeIllustration1.png'
import Image from 'next/image'
import Animation from '@/app/Animation'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'


function Dashboard() {

    const homeSection = useRef()
    const leftContainer = useRef()
    const rightContainer = useRef()


    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.to(homeSection.current, {
    //         scrollTrigger: {
    //             // markers: true,
    //             trigger: homeSection.current,
    //             end:"bottom 30%",
    //             start: "top top",
    //             scrub:1,

    //         },
    //         opacity: 0,
    //         duration:10           
    //     })

    //     gsap.from(leftContainer.current, {
    //         delay:0.8,
    //         duration:1,
    //         scale:0.8
    //     })
    //     gsap.from(rightContainer.current, {
    //         delay:0.8,
    //         duration:1,
    //         scale:0.8
    //     })

    // }, {scope : homeSection})

    return (
        <section className={` block ${styles.section_home}`} id='dashboard' ref={homeSection}>
            {/* <Animation /> */}

            {/* <div className={styles.section_home__left} ref={leftContainer}> */}
                <Image src={image} alt='' ref={leftContainer}/>
            {/* </div> */}
            <div className={styles.section_home__right} ref={rightContainer}>
                <h1>Front-End React Developer</h1>
                <p>Hi, I am <span className={styles.name}>Radonirina</span>.
                    I invite you to explore the world of web and mobile development
                    through my portfolio.</p>
                <div className={styles.container_button}>
                    <Button className={'btn-secondary'}
                        value={"Download CV"}
                        type={'button'} />
                    <Link href={'#contact'}><Button className={'btn-primary'}
                        value={"Contact"}
                        type={'button'} /></Link>

                </div>
            </div>
        </section>
    )
}

export default Dashboard