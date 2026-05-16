// AnimatedCursor.jsx

import React, { useEffect, useState } from "react";

const AnimatedCursor = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      {/* CURSOR */}
      <div
        className="customCursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>

      {/* CSS */}
      <style>{`

        *{
          cursor:none;
        }

        .customCursor{
          position:fixed;
          width:22px;
          height:22px;
          border:2px solid white;
          border-radius:50%;
          transform:translate(-50%, -50%);
          pointer-events:none;
          z-index:99999;
          backdrop-filter:blur(4px);

          box-shadow:
            0 0 12px rgba(255,255,255,0.9),
            0 0 30px rgba(255,255,255,0.6);

          animation:pulseCursor 1.5s infinite;

          transition:
            width 0.2s ease,
            height 0.2s ease,
            transform 0.05s linear;
        }

        @keyframes pulseCursor{

          0%{
            transform:translate(-50%, -50%) scale(1);
          }

          50%{
            transform:translate(-50%, -50%) scale(1.35);
          }

          100%{
            transform:translate(-50%, -50%) scale(1);
          }
        }

      `}</style>
    </>
  );
};

export default AnimatedCursor;