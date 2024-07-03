"use client"

import React, { useRef, useState } from 'react'
import styles from './_contact.module.scss'
import Title from '@/Components/Global/Title/Title'
import emailIllustration from '../../../app/Image/email-illustration.png'
import Image from 'next/image'
import Input from '@/Components/Contact/Input/Input'
import ButtonSend from '@/Components/Contact/Button/ButtonSend'
import TextArea from '@/Components/Contact/Text-Area/TextArea'
import emailjs from 'emailjs-com'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StatutResponse from '@/Components/Contact/StatutResponse/StatutResponse'

function Contact() {

    const imageContainer = useRef(null)
    const [buttonDisable, setButtonDisable] = useState(true)
    const [enableResponse, setEnableResponse] = useState(false)
    const [isSucces, setIsSucces] = useState(true)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSendNotLoading, setIsSendNotLoading] = useState(true)
    const [buttonContent, setButtonContent] = useState('send')

    function handleChangeValue(e) {
        const { name, value } = e.target
        // const name = e.target.name
        // const value = e.target.value

        if (name === 'name') {
            formData.name = value
        }
        if (name === 'email') {
            formData.email = value
        }
        if (name === 'message') {
            formData.message = value
        }

        if (formData.name && formData.email && formData.message) {
            setButtonDisable(false)
        } else {
            setButtonDisable(true)
        }
    }

    function handleSubmitForm(e) {

        setButtonContent('loading ...')
        setIsSendNotLoading(false)

        e.preventDefault()
        emailjs.send('service_x4yca0k', 'template_5zjetkr', formData, 'w7dKq_C37hbeLrg4u').then(function (res) {

            const body = document.querySelector('body')
            body.style.overflow = 'hidden'

            setIsSucces(true)
            setButtonContent('send')
            setIsSendNotLoading(true)
            setButtonDisable(true)

            setEnableResponse(true)

        }).catch((error) => {
            const body = document.querySelector('body')
            body.style.overflow = 'hidden'
            setIsSucces(false)
            setButtonContent('send')
            setIsSendNotLoading(true)
            setEnableResponse(true)

        })
    }

    function leaveStatut() {
        setEnableResponse(false)
        const body = document.querySelector('body')
            body.style.overflow = 'auto'
    }

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.from(imageContainer.current, {
            scrollTrigger:{
                // markers: true,
                trigger:imageContainer.current,
                start:'top 50%',
                toggleActions:'restart none none reverse',
            },
            duration: 2.25,
            rotateZ:65,
            opacity:0,
            ease:'elastic'

        })
    } , { scope: imageContainer})

    return (
        <section className={styles.contact_section} id='contact'>
            <Title
                title={'contact'}
                description={'[[ HERE, YOU CAN CONTACT ME ]]'}
                underTitle={"get in touch"} />

            <div className={styles.container_form}>
                <div className={styles.image_section} >
                    <Image src={emailIllustration} alt='' ref={imageContainer} />
                    <p>radurakotoarivelo@gmail.com</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmitForm}>
                    <Input
                        placeholder={'name'}
                        name={'name'}
                        type={'text'}
                        onChange={handleChangeValue} />

                    <Input
                        placeholder={'email'}
                        name={'email'}
                        type={'email'}
                        onChange={handleChangeValue} />
                    <TextArea onChange={handleChangeValue} />
                    <ButtonSend content={buttonContent} isSendNotLoading={isSendNotLoading} disabled={buttonDisable} />
                    {enableResponse && <StatutResponse isSucces={isSucces} onClick={leaveStatut} />}
                </form>
            </div>

        </section>
    )
}

export default Contact