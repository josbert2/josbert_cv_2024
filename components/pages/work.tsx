'use client'
import { animate, inView, motion } from 'motion/react'
import { useInView } from "react-intersection-observer";
import ButtonSection from '../button-section';


export default function Work() {
    const [ref, inView] = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });
    return (
        <>
            <section ref={ref} className="container mt-20  sm:mt-20">
                <div className="px-20">
                    <motion.div
                        className="btn-title relative pb-10 flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                    >
                       <ButtonSection title="Proyectos" />
                    </motion.div>
                    <div className="grid grid-cols-2">
                        <div className="ssr-variant hidden-12gl4l4 hidden-7slepd">
                            <div className="framer-w4o5l8-container">
                                <a
                                className="framer-nEPlD framer-7qr5v3 framer-v-7qr5v3 framer-17as78p"
                                data-framer-name="Desktop"
                                href="https://www.scroll.supply/conversion"
                                rel="noopener"
                                style={{
                                    backgroundColor:
                                    "var(--token-ed13dd87-efcd-4d28-b449-ce1f4c93eec1, rgb(18, 18, 18))",
                                    borderRadius: "48px",
                                    height: "100%",
                                    opacity: "1",
                                    width: "100%",
                                }}
                                tabIndex="0"
                                target="_blank">
                                <div
                                    className="framer-1r8puyn"
                                    data-framer-name="Image"
                                    style={{
                                    mask: "linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 90%)",
                                    opacity: "1",
                                    transform: "none",
                                    willChange: "auto",
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
                                    <img
                                        alt=""
                                        decoding="async"
                                        sizes="max((min(min(100vw, 1200px) - 128px, 1200px) - 24px) / 2, 200px)"
                                        src="https://framerusercontent.com/images/VOo008v7SH5lMNywd2aX2N481gQ.jpg?scale-down-to=1024"
                                        srcSet="                            https://framerusercontent.com/images/VOo008v7SH5lMNywd2aX2N481gQ.jpg?scale-down-to=512   512w,                            https://framerusercontent.com/images/VOo008v7SH5lMNywd2aX2N481gQ.jpg?scale-down-to=1024 1024w,                            https://framerusercontent.com/images/VOo008v7SH5lMNywd2aX2N481gQ.jpg?scale-down-to=2048 2048w,                            https://framerusercontent.com/images/VOo008v7SH5lMNywd2aX2N481gQ.jpg                    3840w                        "
                                        style={{
                                        borderRadius: "inherit",
                                        display: "block",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                        width: "100%",
                                        }}
                                    />
                                    </div>
                                </div>
                                <div
                                    className="framer-kzbqrm"
                                    data-border="true"
                                    data-framer-name="Border"
                                    style={{
                                    "--border-bottom-width": "1px",
                                    "--border-color":
                                        "var(--token-0737be48-eba6-4299-af9c-cc45281bf79f, rgba(255, 255, 255, 0.1))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    borderRadius: "48px",
                                    mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 82.8442%)",
                                    opacity: "1",
                                    }}
                                />
                                <div
                                    className="framer-dykdj1"
                                    data-framer-name="Content"
                                    style={{
                                    opacity: "1",
                                    }}>
                                    <div
                                    className="framer-15e7gz7"
                                    data-framer-name="Text"
                                    style={{
                                        opacity: "1",
                                    }}>
                                    <div
                                        className="framer-wvxy2p"
                                        data-framer-component-type="RichTextContainer"
                                        style={{
                                        "--extracted-r6o4lv":
                                            "var(--token-5e8402e0-a3a5-4ffd-87e1-db65fd032b26, rgb(245, 245, 248))",
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
                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                            "--framer-font-family":
                                            "'Satoshi', 'Satoshi Placeholder', sans-serif",
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "-0.04em",
                                            "--framer-line-height": "0.9em",
                                            "--framer-text-color":
                                            "var(--extracted-r6o4lv, var(--token-5e8402e0-a3a5-4ffd-87e1-db65fd032b26, rgb(245, 245, 248)))",
                                        }}>
                                        Conversion
                                        </p>
                                    </div>
                                    <div
                                        className="framer-iraqho"
                                        data-framer-name="Button"
                                        style={{
                                        backdropFilter: "blur(5px)",
                                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                                        borderRadius: "999px",
                                        opacity: "0",
                                        willChange: "auto",
                                        }}>
                                        <div
                                        className="framer-17cfs8v-container"
                                        style={{
                                            opacity: "1",
                                            transform: "rotate(45deg)",
                                            willChange: "auto",
                                        }}>
                                        <div
                                            style={{
                                            display: "contents",
                                            }}>
                                            <svg
                                            color="var(--token-49164ff2-888d-40c1-96fa-58a3e961b851, rgb(252, 252, 250))"
                                            focusable="false"
                                            style={{
                                                color:
                                                "var(--token-49164ff2-888d-40c1-96fa-58a3e961b851, rgb(252, 252, 250))",
                                                display: "inline-block",
                                                fill: "var(--token-49164ff2-888d-40c1-96fa-58a3e961b851, rgb(252, 252, 250))",
                                                flexShrink: "0",
                                                height: "100%",
                                                userSelect: "none",
                                                width: "100%",
                                            }}
                                            viewBox="0 0 256 256"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g
                                                color="var(--token-49164ff2-888d-40c1-96fa-58a3e961b851, rgb(252, 252, 250))"
                                                weight="regular">
                                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                                            </g>
                                            </svg>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div
                                    className="framer-2hxlxq"
                                    data-framer-component-type="RichTextContainer"
                                    style={{
                                        "--extracted-r6o4lv":
                                        "var(--token-2d34d26e-aa16-40b8-bb3d-911312dac5d2, rgb(171, 171, 171))",
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
                                        "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                        "--framer-font-family":
                                            "'Satoshi', 'Satoshi Placeholder', sans-serif",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.02em",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-color":
                                            "var(--extracted-r6o4lv, var(--token-2d34d26e-aa16-40b8-bb3d-911312dac5d2, rgb(171, 171, 171)))",
                                        }}>
                                        Website for a digital marketing & paid advertising agency.
                                    </p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>;
                    </div>

                </div>
            </section>
        </>
    )

}