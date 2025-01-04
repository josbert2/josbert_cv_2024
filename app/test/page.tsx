import React from 'react'
import Skill from '@/components/pages/skill'
import OpenWork from '@/components/open-work'

export default function page() {
  return (
    <>
    
    <div className="pt-10">
      <OpenWork />
    </div>
   
    <div>
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
          aria-label="Icon"
          className="framer-1tcxtaf"
          data-framer-name="Tool2"
        
          style={{
            flexShrink: "0",
          }}>
          <div
            data-framer-background-image-wrapper="true"
            style={{
              borderRadius: "inherit",
              inset: "0px",
              position: "absolute",
            }}>
            <img
              alt=""
              src="https://framerusercontent.com/images/YWcP2W5U3RNsyQzTRoW9XnBSL4Q.png"
              style={{
                borderRadius: "inherit",
                display: "block",
                height: "100%",
                imageRendering: "auto",
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
              }}
            />
          </div>
        </div>;

      </div>;

        
    </div>

    </>
  )
}
