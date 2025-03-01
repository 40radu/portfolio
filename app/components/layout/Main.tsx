"use client"
import React, { useEffect } from 'react'
import LocomotiveScroll from "locomotive-scroll";

function Main({ children, }: Readonly<{ children: React.ReactNode; }>) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const locomotiveScroll = new LocomotiveScroll({
      //options
    });
    return () => {
      locomotiveScroll.destroy();
    };
  }, [])
  return (
    <main>
      {children}
    </main>
  )
}
export default Main