'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

function NotFound() {

    return (
        <section className='w-full h-screen flex justify-center items-center flex-col gap-3 '>
            <h2 className=' text-zinc-500 font-semibold' style={{ fontSize: '5.5vw' }}>Page not found</h2>
            <p className='text-base font-semibold '>Something went wrong ! </p>
            <p className='text-base font-semibold '>
                Go back to <Link href={'/'} style={{ textDecoration: 'underline', color: 'red', opacity: '0.8' }}>home</Link> !
            </p>
        </section>
    )
}

export default NotFound