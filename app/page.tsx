"use client"
import Hero from "@/section/Hero";
import Background from "./components/common/Background";
import Skill from "@/section/Skill";
import Service from "@/section/Service";
import Project from "@/section/Project";
import Contact from "@/section/Contact";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";


export default function Home() {

  useEffect(() => {
    new LocomotiveScroll()
  }, [])
  return (
    <>
      <Background />
      <Hero />
      <Skill />
      <Service />
      <Project />
      <Contact />
    </>
  );
}
