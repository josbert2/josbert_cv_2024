import { motion } from "framer-motion"

// Variante para el contenedor (controla el stagger de los hijos)
const containerVariant = {
  initial: {},
  animate: {
    transition: {
      // Ajusta este valor para mayor o menor retraso entre letras
      staggerChildren: 0.02,
    },
  },
}

// Variante para cada letra
const letterVariant = {
  initial: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

interface SplitTextProps {
    text: string
    className?: string
    style?: React.CSSProperties
  }

  function SplitText({ text, className, style }: SplitTextProps) {
    return (
      // Este "contendor" aplica los variants para orquestar el stagger de sus hijos (cada letra)
      <motion.span
        className={className}
        style={style}
        variants={containerVariant}
        initial="initial"
        animate="animate"
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariant}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

export default SplitText