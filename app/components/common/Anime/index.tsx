"use client"
import React, { useEffect, useRef } from 'react'
import "./style.scss"
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

function Anime() {
  const refImage = useRef<HTMLImageElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null);
  function animation() {
    gsap.to(refImage.current, {
      scrollTrigger: {
        trigger: ".hero",
        endTrigger: ".contact",
        start: "start start",
        // markers: true,
        scrub: 1,
      },
      motionPath: {
        path: ".path",
        align: ".path",
        alignOrigin: [0.5, 0.5],
        start: 0,
        autoRotate: true,
      },
    })
  }

  useEffect(() => {
    animation()
    const image = refImage.current
    image?.addEventListener("", () => {
      console.log("pause")
    })
  }, [])
  return (
    <div className="anime">
      <svg width="1157" height="416" viewBox="0 0 1157 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='path' ref={pathRef} d="M0.49993 295.5C0.49993 295.5 7.49992 238 84.4999 225C161.5 212 122.5 66 186 32C249.5 -2.00003 280.261 333.865 342 338C404.253 342.169 536.521 256.919 600 207.5C640.604 175.889 535.101 13.2827 626 2C724.399 -10.2136 768.794 77.2455 829 154.5C875.644 214.353 674.671 336.34 724 394C809.083 493.453 1156 207.5 1156 207.5" 
        stroke="none" />
      </svg>

      <Image src="/rocket.png" alt='' className='rocket' width={150} height={100} ref={refImage} />
    </div>
  )
}

export default Anime