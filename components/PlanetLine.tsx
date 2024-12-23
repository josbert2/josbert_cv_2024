'use client'
import { motion } from "framer-motion";
import { useState } from "react";


export default function PlanetLine() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };


  const lines = [
    { id: 1, left: -220 },
    { id: 2, left: -100 },
    { id: 3, left: 20 },
    { id: 4, left: 140 },
    { id: 5, left: 260 },
    { id: 6, left: 380 },
  ];
    return(
        <>
          <div className="animation"  onMouseMove={handleMouseMove}>
            <div
                data-w-id="5de84416-249c-a789-451c-0f947cf76a75"
                style={{
             
                willChange: "transform",
                transform:
                    "translate3d(-9.9988px, 3.7232px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
                }}
                className="main-planet"
            >
                <div
                data-w-id="2c30f414-cd5a-a352-1afd-e5dde13126e5"
                className="rotate-medium"
                style={{
                    transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(192.614deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform"
                }}
                >
                    <motion.div
                        className="rotate-medium "
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        animate={{
                            rotateZ: 360,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration:15, 
                            ease: "linear", 
                        }} >
                         <div className="medium-planet" />
                    </ motion.div>
               
                </div>
                <div
                data-w-id="7356d627-5fab-e7d3-0a7e-8260bbd8c1dc"
                className="rotate-small"
                style={{
                    transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(50.3748deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform"
                }}
                >
                    {/* */}
                    <motion.div
                        className="rotate-small "
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        animate={{
                            rotateZ: 360,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration:20, 
                            ease: "linear", 
                        }} >
                        <div className="small-planet" />
                    </ motion.div>
                </div>
               
            </div>
            
            {/*<div
                onMouseMove={handleMouseMove}
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
                className="angled-line"
            />
            <div
                className="angled-line line-2"
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
            />
            <div
                className="angled-line line-3"
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
            />
            <div
                className="angled-line line-4"
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
            />
            <div
                className="angled-line line-5"
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
            />
            <div
                className="angled-line line-6"
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
            />
            <div
                className="angled-line line-7"
                style={{
                width: 1200,
                willChange: "transform",
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(9.9988deg) rotateY(-3.7232deg) rotateZ(-45deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                height: 1
                }}
            /> */}


            <div
               
                style={{
                    width: "100vw",
                    height: "100vh",
          
                    position: "relative",
                    overflow: "hidden",
                }}
                >
                {lines.map((line) => (
                    <motion.div
                        key={line.id}
                        className={"angled-line line-" + line.id}
                        style={{
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








          </div>
        </>
    )
}