"use client"
import React from 'react'
import { dataSkillFirst, dataSkillSecond } from './data'
import { useGSAP } from '@gsap/react'
import { changeBg } from '@/app/animation/changeBg'
import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import SkillItem from '@/app/components/display/SkillItem'
import "./style.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from 'swiper/modules'

function Skill() {
  useGSAP(() => {
    changeBg({ newBackground: "Hero-girls.png", startData: "top 70%", triggerData: ".skill", prevBackground: "projet.png" })
  })
  return (
    <Container className='skill' id='h-section' >
      <Heading description='Découvrez mes compétences pour donner vie à vos idées numériques.' label='Compétences' />
      <ul className='skill_content'>
        <li>
          {
            dataSkillFirst.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
        <li>
          {
            dataSkillSecond.map((el, id) => (
              <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
            ))
          }
        </li>
      </ul>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: false }}
        loop={true}
        autoplay={{ delay: 9000 }}>
        <SwiperSlide>
          <li>
            {
              dataSkillFirst.map((el, id) => (
                <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
              ))
            }
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li>
            {
              dataSkillSecond.map((el, id) => (
                <SkillItem key={`${el.label}-${id}`} icon={el.icon} label={el.label} />
              ))
            }
          </li>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Skill