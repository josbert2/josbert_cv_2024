'use client'




export default function page() {

  return (
    <>
      <div className="w-full overflow-hidden p-4">
        <div
        className="
          relative 
          flex 
          h-64 
          w-64 
          items-center 
          justify-center 
          rounded-3xl 
          mx-auto 
          mt-12
        "
        style={{
          // Gradiente suave de fondo. Ajusta colores a tu gusto.
          background: `
            radial-gradient(circle at top left, 
              rgba(224,237,255, 1) 0%, 
              rgba(224,237,255, 0.7) 30%, 
              rgba(235,255,237, 0.8) 60%, 
              rgba(240,240,255, 0.6) 90% 
            )
          `,
          // Sombra suave alrededor (parecido a un efecto “neumórfico”)
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* SVG del icono */}
        <svg
          className="h-24 w-24"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            // Sombra para dar efecto de "flotación" o 3D
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.25))',
          }}
        >
          <defs>
            {/* Gradiente oscuro para simular una transición sutil en el icono */}
            <linearGradient id="darkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111827" /> 
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
          {/* Path de ejemplo. Cambia a tu gusto para replicar tu forma exacta. */}
          <path
            fill="url(#darkGradient)"
            d="M94.1,54.7c14.3-6.8,32.5-1.2,39.3,13.1c6.1,12.7-1.9,30.1-14.5,37.2
              c-12.4,6.9-29.2,3.3-37.4-8.3c-8.3-11.8-5.3-30.4,4.5-40.5C87.2,52.4,91,50.5,94.1,54.7z"
          />
        </svg>
      </div>
      </div>
    </>
  )
}
