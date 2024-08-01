import React, { useEffect, useState, useRef } from 'react'

import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import "./FabricCanvasComponent.css"
import { Canvas, Rect } from 'fabric'

const FabricCanvasComponent = () => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null); // New ref to keep track of fabric canvas instance

  useEffect(() => {
    if (canvasRef.current && !fabricCanvasRef.current) {
      // Initialize fabric canvas only if it's not already initialized
      fabricCanvasRef.current = new Canvas(canvasRef.current);

      // Example: Add a rectangle
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 50,
        height: 50,
        zIndex: 1
      });
      fabricCanvasRef.current.add(rect);
    }
  }, []);

  return (
    <div style={{width: '100%', margin: "20px"}}>
      <canvas ref={canvasRef} width={600} height={300} style={{border: '1px solid black'}}/>
    </div>
  );
}

export default FabricCanvasComponent