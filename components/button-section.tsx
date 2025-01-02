import React from 'react'


interface buttonSectionProps {
    title: string
}
function buttonSection(
    props: buttonSectionProps
) {
  return (
    <div className="framer-3R4K1" data-border="true">
        <div
            className="framer-1brwiev"
            data-border="true"
            data-framer-name="Tag"
            >
            <div
                className="framer-s5a56c"
                data-framer-component-type="SVG"
                data-framer-name="Stroke"
              
                style={{
                backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20100%2038%22%3E%3Cg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22idss9051602305_1g1195120314%22%20cy%3D%220%22%20cx%3D%220.157%22%20r%3D%220.28%22%20gradientTransform%3D%22translate(0.157%2C%200)%20scale(1%203.571428571428571)%20translate(-0.157%2C%20-0)%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgba(255%2C%20255%2C%20255%2C%200.1)%22%20stop-opacity%3D%220.1%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%2081%200%20C%2091.493%200%20100%208.507%20100%2019%20C%20100%2029.493%2091.493%2038%2081%2038%20L%2019%2038%20C%208.507%2038%200%2029.493%200%2019%20C%200%208.507%208.507%200%2019%200%20Z%20M%2081%201%20L%2019%201%20C%209.059%201%201%209.059%201%2019%20C%201%2028.941%209.059%2037%2019%2037%20L%2081%2037%20C%2090.941%2037%2099%2028.941%2099%2019%20C%2099%209.059%2090.941%201%2081%201%20Z%22%20fill%3D%22url(%23idss9051602305_1g1195120314)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                backgroundSize: "100% 100%",
                flexShrink: "0",
                imageRendering: "pixelated",
                }}
            />
            <div
                className="framer-14ij3fl"
                data-framer-component-type="RichTextContainer"
                data-framer-name="Text"
                style={{
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                justifyContent: "flex-start",
                outline: "none",
                transform: "translateX(-50%)",
                }}>
                <p
                className="text-ln-gray-500 text-label-sm"
                style={{
                    "--font-selector": "R0Y7UG9wcGlucy01MDA=",
                    "--framer-font-family": "'Poppins', 'Poppins Placeholder', sans-serif",
                    "--framer-font-size": "12px",
                    "--framer-font-weight": "500",
                    "--framer-line-height": "14px",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                    "var(--token-40b3fdae-a570-48af-96e5-b84e94187a1d, rgb(255, 255, 255))",
                }}>
                    {props.title}
                </p>
            </div>
            </div>;
   
    </div>
  )
}

export default buttonSection