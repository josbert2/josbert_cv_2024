import { motion } from 'motion/react'
import { useEffect, useState } from 'react'


export default function Loader({ onComplete }) {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => prev + 1)
        console.log('progress →', progress + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <>
       <div className="loading d-flex flex-column">
        <div className="infinityChrome" style={{top: '30%', opacity: 0}}>
          <div />
          <div />
          <div />
        </div>
        {/* Safari and others*/}
        <div className="infinity">
          <div><span /></div>
          <div><span /></div>
          <div><span /></div>
        </div>
        {/* Stuff*/}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'none'}}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation={6} result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className=" bg-gray-200 rounded-full h-[1px] w-40">
          {console.log(progress)}
          <motion.div
            className="h-[1px] bg-[#f7f7f7] rounded-full w-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              // Solo cuando progress === 100 disparamos onComplete
              if (progress === 100) {
                console.log('Animación completada 🎉')
                onComplete?.()
              }
            }}
          />
        </div>
      </div>
    </>
  )
}
