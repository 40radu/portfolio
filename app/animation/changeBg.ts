// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // interface ChangeBgProps {
// //   prevBackground: string
// //   newBackground: string;
// //   triggerData: string;
// //   startData: string
// // }

// // export function changeBg(props: ChangeBgProps) {
// //   const { prevBackground, newBackground, triggerData, startData } = props
// //   const background = document.querySelector(".background") as HTMLDivElement
// //   gsap.registerPlugin(ScrollTrigger)
// //   gsap.to(".rect",
// //     {
// //       scrollTrigger: {
// //         // markers: true,
// //         trigger: triggerData,
// //         start: startData,
// //         toggleActions: "restart none none none",
// //         once : true,
// //         onLeaveBack: () => {
// //           gsap.to(".rect", {
// //             backgroundColor: "black",
// //             stagger: {
// //               each: 0.01,
// //               from: 'edges',
// //               grid: 'auto',
// //               ease: 'linear',
// //             },
// //             onComplete: () => {
// //               background.style.backgroundImage = `url(/${prevBackground})`
// //               gsap.to(".rect", {
// //                 backgroundColor: "transparent",
// //                 stagger: {
// //                   each: 0.01,
// //                   from: 'center',
// //                   grid: 'auto',
// //                   ease: 'linear',
// //                 }
// //               })
// //             }
// //           })

// //         }
// //       },
// //       backgroundColor: "black",
// //       stagger: {
// //         each: 0.01,
// //         from: 'edges',
// //         grid: 'auto',
// //         ease: 'linear',
// //       },
// //       onComplete: () => {
// //         background.style.backgroundImage = `url(/${newBackground})`
// //         gsap.to(".rect", {
// //           backgroundColor: "transparent",
// //           stagger: {
// //             each: 0.01,
// //             from: 'center',
// //             grid: 'auto',
// //             ease: 'linear',
// //           },
// //         })
// //       }
// //     }
// //   )
// // }

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// interface ChangeBgProps {
//   prevBackground: string;
//   newBackground: string;
//   triggerData: string;
//   startData: string;
// }

// gsap.registerPlugin(ScrollTrigger);

// export function changeBg(props: ChangeBgProps) {
//   const { prevBackground, newBackground, triggerData, startData } = props;
//   const background = document.querySelector(".background") as HTMLDivElement;
//   let current: boolean = true

//   // ScrollTrigger.create({
//   //   trigger: triggerData,
//   //   start: startData,
//   //   toggleActions: "restart none none none",
//   //   onEnter: () => {
//   //     current = true
//   //     gsap.to(".rect", {
//   //       backgroundColor: "black",
//   //       stagger: {
//   //         each: 0.03,
//   //         from: "edges",
//   //         grid: "auto",
//   //         ease: "linear",
//   //       },
//   //       overwrite: "auto",
//   //       onComplete: () => {
//   //         if (current) {
//   //           background.style.backgroundImage = `url(/${newBackground})`;
//   //         }
//   //         gsap.to(".rect", {
//   //           delay: 0.1,
//   //           backgroundColor: "transparent",
//   //           stagger: {
//   //             each: 0.03,
//   //             from: "center",
//   //             grid: "auto",
//   //             ease: "linear",
//   //           },
//   //         });
//   //       },
//   //     });
//   //   },
//   //   onLeaveBack: () => {
//   //     current = false
//   //     gsap.to(".rect", {
//   //       backgroundColor: "black",
//   //       stagger: {
//   //         each: 0.025,
//   //         from: "center",
//   //         grid: "auto",
//   //         ease: "linear",
//   //       },
//   //       overwrite: "auto",
//   //       onComplete: () => {
//   //         background.style.backgroundImage = `url(/${prevBackground})`;
//   //         gsap.to(".rect", {
//   //           backgroundColor: "transparent",
//   //           stagger: {
//   //             each: 0.025,
//   //             from: "end",
//   //             grid: "auto",
//   //             ease: "linear",
//   //           },
//   //         });
//   //       },
//   //     });
//   //   },
//   // });
// }
