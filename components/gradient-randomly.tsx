'use client'
import React, { useState, useEffect } from "react";

// 1. Tu lista de gradientes
const GRADIENTS = [
  //"linear-gradient(135deg, #ffbc00 0%, #ff0058 100%)",
  //"linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
  //"linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
  //"radial-gradient(circle, #ff5f6d 0%, #ffc371 100%)",
  "linear-gradient(45deg, rgb(255, 251, 253), rgb(255, 229, 245), rgb(247, 105, 234), rgb(74, 28, 155), rgb(18, 5, 27))"
  // ... agrega los que quieras
];

// 2. Función para seleccionar un gradiente aleatorio
function getRandomGradient() {
  return GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
}

const RandomGradient = () => {
  // 3. Usamos un estado para guardar el gradiente seleccionado
  const [randomGradient, setRandomGradient] = useState("");

  useEffect(() => {
    // Cuando se monta el componente, escogemos uno aleatorio
    const chosen = getRandomGradient();
    setRandomGradient(chosen);
  }, []);

  // Opcional: botón para refrescar manualmente el gradiente
  const handleChangeGradient = () => {
    setRandomGradient(getRandomGradient());
  };

  // 4. Aplicas el gradiente como background
  const containerStyle = {
    width: "100%",
    height: "400px",
    background: randomGradient,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Gradiente Aleatorio</h2>
        <p>{randomGradient}</p>
        <button onClick={handleChangeGradient}>Cambiar Gradiente</button>
      </div>
    </div>
  );
};

export default RandomGradient;
