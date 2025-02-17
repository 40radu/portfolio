import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ChangeBgProps {
  prevBackground: string
  newBackground: string;
  triggerData: string;
  startData: string
}

export function changeBg(props: ChangeBgProps) {
  const { prevBackground, newBackground, triggerData, startData } = props
  const background = document.querySelector(".background") as HTMLDivElement
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".rect",
    {
      scrollTrigger: {
        // markers: true,
        trigger: triggerData,
        start: startData,
        toggleActions: "restart none none none",
        onLeaveBack: () => {
          gsap.to(".rect", {
            backgroundColor: "black",
            stagger: {
              each: 0.01,
              from: 'edges',
              grid: 'auto',
              ease: 'linear',
            },
            onComplete: () => {
              background.style.backgroundImage = `url(/${prevBackground})`
              gsap.to(".rect", {
                backgroundColor: "transparent",
                stagger: {
                  each: 0.01,
                  from: 'center',
                  grid: 'auto',
                  ease: 'linear',
                }
              })
            }
          })

        }
      },
      backgroundColor: "black",
      stagger: {
        each: 0.01,
        from: 'edges',
        grid: 'auto',
        ease: 'linear',
      },
      onComplete: () => {
        background.style.backgroundImage = `url(/${newBackground})`
        gsap.to(".rect", {
          backgroundColor: "transparent",
          stagger: {
            each: 0.01,
            from: 'center',
            grid: 'auto',
            ease: 'linear',
          },
        })
      }
    }
  )
}