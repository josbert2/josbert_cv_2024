'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Test() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Manejar el movimiento del mouse
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Líneas con propiedades únicas
  const lines = [
    { id: 1, left: -220 },
    { id: 2, left: -100 },
    { id: 3, left: 20 },
    { id: 4, left: 140 },
    { id: 5, left: 260 },
    { id: 6, left: 380 },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {lines.map((line) => (
        <motion.div
          key={line.id}
          style={{
            position: "absolute",
            left: `${line.left}px`,
            bottom: "0px",
            width: "1200px",
            height: "1px",
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: (mousePosition.y / window.innerHeight) * 10 - 5, // Controla el ángulo en X
            rotateY: (mousePosition.x / window.innerWidth) * 10 - 5, // Controla el ángulo en Y
            rotateZ: -45, // Mantén la rotación Z fija
            translateX: mousePosition.x / 10 - line.id * 10, // Pequeño desplazamiento en X
            translateY: mousePosition.y / 10 - line.id * 10, // Pequeño desplazamiento en Y
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

