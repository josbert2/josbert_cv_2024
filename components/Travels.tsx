
'use client'
import Image from 'next/image';

export default function NalaImage() {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
  
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                  <img
                    alt="Photo 0 of João's travels"
                    fetchpriority="high"
                    width={1536}
                    height={2048}
                    decoding="async"
                    data-nimg={1}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(min-width: 640px) 18rem, 11rem"
                    
                    src="https://www.jopcmelo.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.6bda92e9.webp&w=384&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                    <Image
                        src="/images/nala.jpg"
                        width={3024}
                        height={4032}
                        alt="Nala"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
              </div>
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                  <Image 
                    src="/images/image-5 (1).webp"
                    width={3024}
                    height={4032}
                    alt="Nala"
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
              </div>
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <Image 
                    src="/images/image-4.jpg"
                    width={3024}
                    height={4032}
                    alt="Nala"
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
              </div>
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <Image 
                    src="/images/iamge-5.png"
                    width={3024}
                    height={4032}
                    alt="Nala"
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
              </div>
            </div>
  );
}