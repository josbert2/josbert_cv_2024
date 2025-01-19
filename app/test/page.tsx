'use client'
import React from 'react'
import Skill from '@/components/pages/skill'
import Abstraccion from '@/components/abstraccion'
import ParticulasAbstraccion from '@/components/particles-asbtraccion'
import AsteroidMotion from '@/components/Asteroide'
import { motion } from 'motion/react'
import MarqueeHtml from '@/components/marquee'

export default function page() {
  return (
    <>
      <div className="pt-10 absolute top-0 left-0 h-full w-full">
        <MarqueeHtml />
      </div>
    </>
  )
}
