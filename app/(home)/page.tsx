import {
  //BecomeSponsor,
  //DashedCircle,
  //DashedLineContainer,
  //Feature,
  //GetStarted,
 
  //HorizontalDashedLine,
  //VerticalDashedLine,
  HeaderUser,
  LineAbsolute,
  HeroSection,
  UserTravels,
  AboutMe
} from "./page.client"


import { BackgroundPaths } from '@/components/BackgroundPaths';

//import PlanetLine from '@/components/PlanetLine';AboutMe

//import About from "@/components/pages/about";
//import Contact from "@/components/pages/contact";
import Work from "@/components/pages/work";

import Separator from "@/components/misc/separator";

import CornedEarth from '@/components/corned-earth'

//import OpenWork from '@/components/open-work'

//import Abstraccion from '@/components/abstraccion'

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

        {/* About me */}
        <AboutMe/>

        <Work/>
        <div className="-z-10 container pointer-events-none mt-[225px] mb-[225px]  rotate-180 transform invert-orbit">
          <div className="">
            <CornedEarth />
          </div>
        </div>
        <div className="container pointer-events-none !px-0 mx-0  select-none mac:block">
        <BackgroundPaths/>
        </div>
        

        {/* <div className="relative">
        <Contact/>
      </div> */}

     
      {/*<div className="relative ">
        <div className="transform translate-y-[261px] rotate-180">
          <ParticulasAbstraccion />
        </div>
       <Abstraccion /> 
      </div> */}
    

      </div>
    </>
  )
}
