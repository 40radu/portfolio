// 
"use client"
import React, { useState, useEffect } from "react";
import "./style.scss";

function Background() {
  const [rectCount, setRectCount] = useState(60); // Valeur par défaut

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024 ) {
        setRectCount(100); 
      } 
      if(window.innerWidth >= 1440){
        setRectCount(120)
      }
    };
    updateCount(); // Exécuter une première fois
    window.addEventListener("resize", updateCount);

    return () => {
      window.removeEventListener("resize", updateCount);
    };
  }, []);

  return (
    <div className="background">
      {Array(rectCount)
        .fill(null)
        .map((_, id) => (
          <span className="rect" key={id}></span>
        ))}
    </div>
  );
}

export default Background;
