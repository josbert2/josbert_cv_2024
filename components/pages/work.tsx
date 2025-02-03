'use client'
import { animate, inView, motion } from 'motion/react'
import { useState } from 'react'
import { useInView } from "react-intersection-observer";
import ButtonSection from '../button-section';
import Image from 'next/image'

import Projecto from '@/assets/project-1.webp'
import Projecto2 from '@/assets/project-2.png'


import p1 from '@/assets/p1.webp'
import p2 from '@/assets/p2.webp'
import p3 from '@/assets/p3.webp'
import p4 from '@/assets/p3.jpeg'



import test from '@/assets/test.jpeg'
import test2 from '@/assets/test2.png'


export default function Work() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [ref, inView] = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });

    const dataProject = [
        {
            title: "Entrekids",
            description: "Entrekids",
            image: test,
            type: "Web APP",
            url: "#"
        },
        {
            title: "Bookforce",
            description: "Navigate the world of web technology",
            image: p4,
            type: "Web APP",
            url: "#"
        },
        {
            title: "Criptovision",
            description: "End-to-end Blockchain Services",
            image: p3,
            type: "Web 3 App",
            url: "https://criptovision.com/"
        },
        {
            title: "Bookforce",
            description: "Navigate the world of web technology",
            image: test2,
            type: "Web APP",
            url: "#"
        },
    ]



    return (
        <>
            <section ref={ref} className="container mt-20 pb-20 relative  sm:mt-20">
                <div className="px-20">
                    <motion.div
                        className="btn-title relative w-full mb-16 flex justify-start container-btn"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                    >
                        <div className="framer-1u3alye"></div>
                       <ButtonSection title="Proyectos" />
                       <div className="framer-4ek1z5"></div>
                    </motion.div>
                 
                    <div className="framer-1lrue9j">
                       
                        {dataProject.map((project, index) => (
                             <div
                             className="framer-1hhlnuq-container"
                             key={index}
                             style={{
                                 opacity: "1",
                                 transform: "perspective(1200px)",
                             }}>
                                <a
                                    className="framer-rtsKZ framer-6pxgjl framer-v-6pxgjl framer-d4tf0f"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    href="./projects/glide"
                                    style={{
                                        backgroundColor: "rgba(21, 22, 23, 0)",
                                        opacity: "1",
                                        width: "100%",
                                    }}
                                  >
                                    <div
                                    className="framer-1edw8qi-container"
                                    style={{
                                        opacity: "0",
                                    }}>
                                    <div
                                        style={{
                                        display: "contents",
                                        }}>
                                        <svg
                                        color="rgba(0, 0, 0, 0.19)"
                                        focusable="false"
                                        style={{
                                            color: "rgba(0, 0, 0, 0.19)",
                                            display: "inline-block",
                                            fill: "rgba(0, 0, 0, 0.19)",
                                            flexShrink: "0",
                                            height: "100%",
                                            userSelect: "none",
                                            width: "100%",
                                        }}
                                        viewBox="0 0 256 256"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g color="rgba(0, 0, 0, 0.19)" weight="regular">
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                                        </g>
                                        </svg>
                                    </div>
                                    </div>
                                    <motion.div
                                    className="framer-2hmlbu"
                                    data-framer-name="BlurImage"
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        borderRadius: "18px",
                                        filter: "brightness(2) saturate(2) blur(80px)",
                                        opacity: "0",
                                    }}>
                                        <div
                                            data-framer-background-image-wrapper="true"
                                            style={{
                                            borderRadius: "inherit",
                                            bottom: "0",
                                            left: "0",
                                            position: "absolute",
                                            right: "0",
                                            top: "0",
                                            }}>
                                            <Image 
                                                src={project.image} 
                                                alt=""
                                                sizes="calc(min(473px, 100vw) - 2px)"
                                                style={{
                                                    borderRadius: "inherit",
                                                    display: "block",
                                                    height: "100%",
                                                    imageRendering: "auto",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                    width: "100%",
                                                }}
                                            />
                                            {/*<img
                                            alt=""
                                            sizes="calc(min(473px, 100vw) - 2px)"
                                            src="https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png"
                                            srcSet="                        https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png?scale-down-to=512   512w,                        https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png?scale-down-to=1024 1024w,                        https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png                    1920w                    "
                                            style={{
                                                borderRadius: "inherit",
                                                display: "block",
                                                height: "100%",
                                                imageRendering: "auto",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                            }}
                                            /> */}
                                        </div>
                                    </motion.div>
                                    <div
                                    className="framer-11vnvy3"
                                    data-border="true"
                                    data-framer-name="GlassCard"
                                    style={{
                                        "--border-bottom-width": "1px",
                                        "--border-color": "rgba(255, 255, 255, 0.06)",
                                        "--border-left-width": "1px",
                                        "--border-right-width": "1px",
                                        "--border-style": "solid",
                                        "--border-top-width": "1px",
                                        backdropFilter: "blur(10px)",
                                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                                        borderRadius: "20px",
                                        boxShadow:
                                        "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
                                        opacity: "1",
                                    }}>
                                    <div
                                        className="framer-1p6numl"
                                        data-framer-name="BadgeWrapper"
                                        style={{
                                        opacity: "1",
                                        }}>
                                        <div
                                        className="framer-1d5va92"
                                        data-framer-name="Badge"
                                        style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                                            borderRadius: "7px",
                                            opacity: "1",
                                        }}>
                                        <div
                                            className="framer-1bn53k8"
                                            data-framer-name="Fill"
                                            style={{
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            borderRadius: "6px",
                                            opacity: "1",
                                            }}
                                        />
                                        <div
                                            className="framer-1gqbim0"
                                            data-framer-component-type="RichTextContainer"
                                            style={{
                                            "--extracted-r6o4lv": "rgb(173, 173, 173)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            display: "flex",
                                            flexDirection: "column",
                                            flexShrink: "0",
                                            justifyContent: "flex-start",
                                            opacity: "1",
                                            outline: "none",
                                            transform: "none",
                                            }}>
                                            <p
                                            className="framer-text"
                                            style={{
                                                "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                                                "--framer-font-family":
                                                "'General Sans', 'General Sans Placeholder', sans-serif",
                                                "--framer-font-size": "12px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(173, 173, 173))",
                                            }}>
                                            iOS App
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <div
                                        className="framer-1w58y41"
                                        data-framer-name="Content"
                                        style={{
                                        opacity: "1",
                                        }}>
                                        <div
                                        className="framer-1hrzvqf"
                                        data-framer-name="Icon"
                                        style={{
                                            borderRadius: "14px",
                                            boxShadow:
                                            "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
                                            filter: "grayscale(1)",
                                            opacity: "1",
                                        }}>
                                        <div
                                            data-framer-background-image-wrapper="true"
                                            style={{
                                            borderRadius: "inherit",
                                            bottom: "0",
                                            left: "0",
                                            position: "absolute",
                                            right: "0",
                                            top: "0",
                                            }}>
                                           

                                            <Image 
                                                src={project.image} 
                                                alt=""
                                                   sizes="44px"
                                                style={{
                                                    borderRadius: "inherit",
                                                    display: "block",
                                                    height: "100%",
                                                    imageRendering: "auto",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                    width: "100%",
                                                }}
                                            />


                                        </div>
                                        </div>
                                        <div
                                        className="framer-s6ljvk"
                                        data-framer-component-type="RichTextContainer"
                                        style={{
                                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            display: "flex",
                                            flexDirection: "column",
                                            flexShrink: "0",
                                            justifyContent: "flex-start",
                                            opacity: "1",
                                            outline: "none",
                                            textShadow: "rgba(0, 0, 0, 0.2) 0px 4px 9px",
                                            transform: "none",
                                        }}>
                                            
                                        <p
                                            className="framer-text"
                                            style={{
                                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXNlbWlib2xk",
                                            "--framer-font-family":
                                                "'__Inter_d65c78', 'General Sans Placeholder', sans-serif",
                                            "--framer-font-size": "32px",
                                            "--framer-font-weight": "600",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-line-height": "1em",
                                            "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                            }}>
                                            <span
                                            className="framer-text"
                                            data-text-fill="true"
                                            style={{
                                                backgroundImage:
                                                "linear-gradient(0deg, rgb(199, 199, 199) 0%, rgb(250, 250, 250) 100%)",
                                            }}>
                                            {project.title}
                                            </span>
                                        </p>
                                        </div>
                                        <div
                                        className="framer-1g9epbg"
                                        data-framer-name="Byline"
                                        style={{
                                            opacity: "1",
                                        }}>
                                        <div
                                            className="framer-1w079fg"
                                            data-framer-component-type="RichTextContainer"
                                            style={{
                                            "--extracted-r6o4lv":
                                                "var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7))",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            display: "flex",
                                            flexDirection: "column",
                                            flexShrink: "0",
                                            justifyContent: "flex-start",
                                            opacity: "1",
                                            outline: "none",
                                            transform: "none",
                                            }}>
                                            <p
                                            className="framer-text"
                                            style={{
                                                "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                "'General Sans', 'General Sans Placeholder', sans-serif",
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7)))",
                                            }}>
                                            {project.description}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div
                                    className="framer-ejjo2t"
                                    data-framer-name="ImageWrap"
                                    style={{
                                        borderRadius: "18px",
                                        opacity: "1",
                                    }}>
                                    <div
                                        className="framer-q1jd2k"
                                        data-framer-name="Image"
                                        style={{
                                        borderRadius: "18px",
                                        opacity: "1",
                                        transform: "perspective(1200px)",
                                        }}>
                                        <div
                                        data-framer-background-image-wrapper="true"
                                        style={{
                                            borderRadius: "inherit",
                                            bottom: "0",
                                            left: "0",
                                            position: "absolute",
                                            right: "0",
                                            top: "0",
                                        }}>
                                            <Image 
                                                src={project.image}
                                                alt="he"
                                                style={{
                                                    borderRadius: "inherit",
                                                    display: "block",
                                                    height: "100%",
                                                    imageRendering: "auto",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                    width: "100%",
                                                }} 
                                            />
                                        
                                        </div>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                        
                    </div>
                   

                </div>
                
            </section>
        </>
    )

}