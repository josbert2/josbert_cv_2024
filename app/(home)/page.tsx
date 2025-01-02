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
import PlanetLine from '@/components/PlanetLine';
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Work from "@/components/pages/work";

import Separator from "@/components/misc/separator";
import Header from "@/components/header";
import LineAbsolute from "@/components/misc/lineAbsolute";
import Stay from "@/components/misc/Stay";
import CornedEarth from '@/components/corned-earth'
import StarField  from "@/components/particles";


export default function HomePage() {
  return (
    <div className="relative isolate flex min-h-screen flex-col bg-ln-gray-25">
      <Header />
      
      <LineAbsolute />

      
      
      <div className="flex flex-col items-center text-center px-40 xl:px-72 py-32 z-[100]">
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
              <img className="rounded-[24px]" src="https://josbert.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperfil.41276050.jpg&w=1080&q=75" />
            </div>
          </div>
          <h1 className={cn('text-title-h1 bg-clip-text bg-gradient-to-b from-black dark:from-white text-transparent antialiased relative text-5xl sm:text-7xl font-bold py-5 font-anurati')}>
            Josbert Hernández
           

          </h1>
          <h2 className="mb-0 text-gray-500 text-title-h5 font">
            Creative Developer &
            <br />
            UI/UX Designer
          </h2>
          <div className="">
            <div className="mx-auto h-8 w-full max-w-[596px] items-center gap-6 px-4 my-4 hidden md:flex xl:my-8">
         
               

                <div className="relative h-px w-full flex-1 bg-ln-gray-200">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                    </svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px]  right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                    </svg>
                </div>
                <img src="https://alignui.com/images/landing/section-separator-icon.png" alt="" width="34" height="26" className="shrink-0 object-contain mx-5" />
                <div className="relative h-px w-full flex-1 bg-ln-gray-200">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                </svg>
                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px]  right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                </svg>
                </div>
            </div>

          </div>

          <div className="flex justify-center">
            <div
         
         
              className="relative mb-8 isolate grid  auto-cols-fr grid-flow-col gap-1 rounded-10 bg-bg-weak-50 p-1 mb-3"
          
             
              style={{ outline: "none" }}
            >
             
              
              <button
               
                className=" bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              
              >
                <Github className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
              
                className="  bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              
              >
                <Instagram className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
                className="   bg-ln-gray-0 relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              >
                <Linkedin className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
                className="   bg-ln-gray-0 relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              >
                <Codepen className="text-[#9b9b9b] w-4 h-4" />
              </button>
              <button
                className="   bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square"
              >
                <Twitter className="text-[#9b9b9b] w-4 h-4" />
              </button>
             
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
          
          <div className="h-full w-full absolute top-0 right-0 overflow-hidden z-[-10]">
            <div className="w-full h-full flex justify-end">
              {/*<PlanetLine/> */}
            </div>
          </div>
         {/* <Stay /> */}
        </DashedLineContainer>
        

      
      </div>
      <div className=" container pointer-events-none mt-[250px]">
        <div className="">
        <StarField />
        <CornedEarth />
        </div>
      </div>
      <div className="container pointer-events-none !pl-0 !pr-0 -z-10  select-none mac:block">
        <div className="border-t border-color w-full">
          
        </div>
      </div>
      <div className="">
          <div className="mt-16 sm:mt-20 relative">
            <div className="absolute top-[35px] w-full h-[57px] bg-[#1a1a1d]">
            
            </div>
            <Travels />
          </div>
      </div>
      <Separator/>
      <Work/>
      <About/>
     
      <div className="relative">
        <Contact/>
      </div>
      
    </div>
    
  )
}
