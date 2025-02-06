'use client'

import Loader from '@/components/Loader'




export default function page() {

  const handleComplete = () => {
    console.log("Animación completada 🎉");

  };

  return (
    <>
      <Loader onComplete={handleComplete} />;
    </>
  )
}
