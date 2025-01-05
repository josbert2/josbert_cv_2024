import React from 'react'
import Skill from '@/components/pages/skill'
import Abstraccion from '@/components/abstraccion'
import ParticulasAbstraccion from '@/components/particles-asbtraccion'

export default function page() {
  return (
    <>
    
    <div className="pt-10">
      <div className="transform translate-y-[64px] rotate-180">
        <ParticulasAbstraccion />
      </div>
      <Abstraccion />

    </div>
   
   

    </>
  )
}
