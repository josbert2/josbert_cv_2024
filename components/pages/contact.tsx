"use client";
import { animate, inView, motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
            >
              <defs>
                <pattern
                  id=":r4l:"
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                  x={-12}
                  y={4}
                >
                  <path d="M.5 20V.5H20" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#:r4l:)" />
              <svg x={-12} y={4} className="overflow-visible">
                <rect strokeWidth={0} width={21} height={21} x={160} y={60} />
                <rect strokeWidth={0} width={21} height={21} x={160} y={100} />
                <rect strokeWidth={0} width={21} height={21} x={160} y={60} />
                <rect strokeWidth={0} width={21} height={21} x={200} y={120} />
                <rect strokeWidth={0} width={21} height={21} x={200} y={100} />
              </svg>
            </svg>
          </div>
        </div>
      <section ref={ref} className="container mt-20  sm:mt-20 relative">
        
 
        <div className="px-20">
          <div
            className="hero mt-14 mb-44 flex flex-col items-center px-7 md:px-0 "
            id="contact"
          >
            <h1 className="heroh1  antialiased  text-gray-500">
              Déjame tu <br />
              <span id="hero-heading-key-line" >
                mensaje
              </span>{" "}
              para que podamos trabajar juntos
            </h1>
            <div className="bprder-gray-200 mt-20 grid w-full grid-cols-3 gap-5 border-t pt-20  md:w-2/4 lg:w-8/12">
              <div className="col-span-3 md:col-span-2">
                <div className="w-full px-8 inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative group cursor-pointer border-0 bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:bg-[length:200%] before-bg-length before:left-1/2  before:[filter:blur(calc(0.8*1rem))]  before:-translate-x-1/2  before:animate-rainbow  before:h-1/5  before:z-0 before:w-3/5 before:absolute before:bottom-[-5%] before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-2)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-5)))]  before:content-['']">
                  <input
                    type="text"
                    className="group flex h-8 w-full shrink-0 items-center gap-1.5 
                    rounded-[9px] bg-ln-gray-25 pl-2 text-left ring-1 ring-[#333]/10 
                    transition duration-200 ease-linear hover:bg-ln-gray-0 py-5 px-5  shadow-regular-xs"
                    placeholder="Get In Touch: joheandroid@gmail.com"
                    name="email"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <a
                  href="#"
                  className="group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center
                   space-x-2 rounded-lg bg-white p-px px-4 py-2 text-sm font-semibold leading-6
                    text-gray-500 border   border-[#333]/10 no-underline shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition
                     duration-200 hover:-translate-y-0.5 dark:bg-neutral-800
                      dark:text-white sm:w-52 shadow-ln-branding-neutral"
                >
                  ¡Di hola!
                </a>
              </div>
            </div>
            <div className="mt-14 flex w-full flex-col items-center">
              <div className="flex w-full items-center justify-center text-gray-500">
                Design by Josbert Hernández{"{"}' '{"}"}
              </div>
              <div className="mt-4">
                <a
                  href="tel:+56 940633120"
                  className="flex items-center text-gray-500"
                >
                  +56 9 4063 3120
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
            <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 
            dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0 font-anurati">DEVELO</p>
        </div>
      </section>
    </>
  );
}
