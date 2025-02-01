import {
  //BecomeSponsor,
  DashedCircle,
  DashedLineContainer,
  //Feature,
  //GetStarted,
 
  HorizontalDashedLine,
  VerticalDashedLine,
  HeaderUser,
  LineAbsolute,
  HeroSection,
  UserTravels
} from "./page.client"


import localFont from 'next/font/local';
import { cn } from '@/utils/cn';




//import PlanetLine from '@/components/PlanetLine';
//import About from "@/components/pages/about";
//import Contact from "@/components/pages/contact";
import Work from "@/components/pages/work";

import Separator from "@/components/misc/separator";

import CornedEarth from '@/components/corned-earth'

//import OpenWork from '@/components/open-work'

//import Abstraccion from '@/components/abstraccion'
import ParticulasAbstraccion from '@/components/particles-asbtraccion'
import AsteroidMotion from '@/components/Asteroide'
import StarField from '@/components/particles'
//import Rrss from '@/components/Rrss'


export default function HomePage() {
  return (
    <>
      <div className="relative isolate flex min-h-screen flex-col bg-ln-gray-25">
        <HeaderUser />
        <LineAbsolute />
        <div className="pt-10 absolute top-0 left-0 h-full w-full">
          <AsteroidMotion />
        </div>

        {/* hero  section */}
        <HeroSection />

        {/* decoration orbit */}
        <div className=" container pointer-events-none mt-[225px] ">
          <div className="">
            <StarField />   
            <CornedEarth />
          </div>
        </div>


        <div className="container pointer-events-none !pl-0 !pr-0 -z-10  select-none mac:block">
          <div className="border-t border-color w-full">
            
          </div>
        </div>

        {/* Travel */}
        <UserTravels />

        {/* SEPARATOR */}
        <Separator/>

        <Work/>

        {/* <div className="relative">
        <Contact/>
      </div> */}

      <div className="h-[700px]">
      
      </div>
      <div className="relative ">
        <div className="transform translate-y-[261px] rotate-180">
          <ParticulasAbstraccion />
        </div>
       {/* <Abstraccion /> */}
      </div>
      <div className="h-[700px] z-10 bg-[#1a1a1d]">
      
      </div>

      </div>
    </>
  )
}
