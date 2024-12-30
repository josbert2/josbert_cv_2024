import React from "react";

const SvgGrid = ({ rows, cols, cellWidth, cellHeight }) => {
  // Crear las celdas como rectángulos SVG
  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push(
        <rect
          key={`cell-${row}-${col}`}
          x={col * cellWidth}
          y={row * cellHeight}
          width={cellWidth}
          height={cellHeight}
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      );
    }
  }

  const svgWidth = cols * cellWidth;
  const svgHeight = rows * cellHeight;

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={`translate(0, ${svgHeight}) scale(1, -1)`}>{cells}</g>
    </svg>
  );
};

export default SvgGrid;
