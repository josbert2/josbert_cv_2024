import { Instagram, Github, Linkedin,Codepen, Twitter } from 'lucide-react';

export default function Rrss() {
    return (
        <>
             <div className="flex items-center flex-col">
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
        </>
    )
}