import {
  BecomeSponsor,
  DashedCircle,
  DashedLineContainer,
  Feature,
  GetStarted,
 
  HorizontalDashedLine,
  VerticalDashedLine,
} from "./page.client"
import { Instagram, Github, Linkedin,Codepen, Twitter } from 'lucide-react';

import localFont from 'next/font/local';
import { cn } from '@/utils/cn';
import { DotPattern } from "@/components/dot-pattern";


import Travels from '@/components/Travels';

export default function HomePage() {

  return (
    <div className="relative isolate flex min-h-screen flex-col bg-ln-gray-25">
      
      <div className="ellipsis pc-37aetM undefined" data-v-ec8112a1=""><div className="ellipsis-item" data-v-ec8112a1=""></div></div>

      <div className="container pointer-events-none absolute inset-0 -z-10  select-none mac:block">
        <div className="absolute -left-0 bleed-ln-gray-200 bleed-border-b   h-full"></div>
        <div className="absolute -right-0 bleed-ln-gray-200 bleed-border-b h-full"></div>
      </div>
      <div className="flex flex-col items-center text-center px-52 py-32 z-[100]">
        {/*<header className="header-main absolute top-[17px] z-10 flex h-16 w-full items-center justify-between gap-4 bg-ln-gray-25 px-4 lg:h-auto lg:w-auto lg:justify-start lg:rounded-3xl lg:bg-ln-gray-0 lg:p-[18px] lg:shadow-ln-xs">
            asd
          </header> */}
   

        <DashedLineContainer>
          <VerticalDashedLine
            className="md:-left-10"
            width="calc(100% + 80px)"
            mobileWidth="100%"
          />
          <div className="z-[-10] ">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(235px_circle_at_center,white,transparent)] top-[-104px]",
              )}
            />
          </div>
          
          <div className="flex justify-center py-4 rounded-lg mt-6">
            <div className="frame rounded-lg">
              <img className="rounded-lg" src="https://josbert.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperfil.41276050.jpg&w=1080&q=75" />
            </div>
          </div>
          <h1 className={cn('text-title-h1 bg-clip-text bg-gradient-to-b from-black text-transparent antialiased relative text-5xl sm:text-7xl font-bold py-5 font-anurati')}>
            Josbert Hernández
           

          </h1>
          <h2 className="mb-0 text-gray-500 text-title-h5 font">
            Creative Developer &
            <br />
            UI/UX Designer
          </h2>
          <div className="">
            <div className="mx-auto h-8 w-full max-w-[596px] items-center gap-6 px-4 my-8 hidden md:flex xl:my-12">
                <div className="relative h-px w-full flex-1 bg-ln-gray-200">
                    <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
                </div>
                <img src="https://alignui.com/images/landing/section-separator-icon.png" alt="" width="34" height="26" className="shrink-0 object-contain" />
                <div className="relative h-px w-full flex-1 bg-ln-gray-200">
                    <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
                </div>
            </div>

          </div>

          <div className="flex justify-center">
            <div
         
         
              className="relative mb-8 isolate grid  auto-cols-fr grid-flow-col gap-1 rounded-10 bg-bg-weak-50 p-1 mb-3"
          
             
              style={{ outline: "none" }}
            >
             
              
              <button
               
                className=" bg-white  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              
              >
                <Github className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
              
                className="  bg-white  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              
              >
                <Instagram className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
                className="   bg-white  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              >
                <Linkedin className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
                className="   bg-white  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              >
                <Codepen className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
                className="   bg-white  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              >
                <Twitter className="text-[#9b9b9b] w-4 h-4" />
              </button>
             
            </div>
          </div>
          <VerticalDashedLine />

          
      

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4 relative py-10 px-8">
            <button className="about-me relative inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10 px-4 text-label-sm outline-none transition duration-200 ease-out focus:outline-none bg-bg-white-0 text-ln-gray-500 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
              01. About
            </button>
            <button className="experiencia relative inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10 px-4 text-label-sm outline-none transition duration-200 ease-out focus:outline-none bg-bg-white-0 text-ln-gray-500 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
              02. Experiencia
            </button>
            <button className="trabajos relative inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10 px-4 text-label-sm outline-none transition duration-200 ease-out focus:outline-none bg-bg-white-0 text-ln-gray-500 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
              03. Trabajos
            </button>
            <button className="contacto relative inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10 px-4 text-label-sm outline-none transition duration-200 ease-out focus:outline-none bg-bg-white-0 text-ln-gray-500 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
              04. Contactos
            </button>


              <HorizontalDashedLine
                className="hidden md:block"
                height="calc(100% + 56px)"
                side="left"
              />
              <HorizontalDashedLine
                className="hidden md:block"
                height="calc(100% + 56px)"
                side="right"
              />
            </div>
          </div>

          <VerticalDashedLine />

          <HorizontalDashedLine
            className="-top-14"
            height="calc(100% + 112px)"
            side="left"
          />
          <HorizontalDashedLine
            className="-top-14"
            height="calc(100% + 112px)"
            side="right"
          />
          <DashedCircle className="-top-12 -left-12" />
          
          
        </DashedLineContainer>

       
      </div>
      <div className="container pointer-events-none !pl-0 !pr-0 -z-10  select-none mac:block">
        <div className="border-t border-[#e0e0e0] w-full">
          
        </div>
      </div>
      <div className="">
          <div className="mt-16 sm:mt-20">
              <Travels />
          </div>
      </div>
      <div className="container mt-16 sm:mt-20">
          <button className="bg-bg-weak-50 px-1 py-1 rounded-full">
            <div className="bg-white px-4 shadow-regular-xs py-2 rounded-full">
              <span className="text-title-h6 bg-clip-text bg-gradient-to-b from-black text-transparent antialiased relative text-5xl sm:text-7xl font-bold">
                01. About me
              </span>
            </div>
          </button>
      </div>
      
    </div>
    
  )
}

const features = [
  {
    title: "Highly Customizable",
    description:
      "Inherits shadcn/ui's design philosophy with Radix UI's powerful declarative components",
  },
  {
    title: "Great Developer Experience",
    description:
      "Declarative API design, reduced boilerplate code, improved development efficiency",
  },
  {
    title: "Accessibility First",
    description:
      "Built on Radix UI's accessibility support with beautiful animations",
  },
  {
    title: "Theme System",
    description:
      "Built-in light/dark modes with support for custom theme colors and styles",
  },
  {
    title: "TypeScript First",
    description:
      "Complete TypeScript type support with intelligent code suggestions",
  },
  {
    title: "Responsive Design",
    description:
      "Optimized for different devices ensuring great cross-platform experience",
  },
]
