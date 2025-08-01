'use client'

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    p5: any;
  }
}

const P5Sketch = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadP5 = async () => {
      if (typeof window !== 'undefined') {
        const p5 = (await import('p5')).default;
        
        if (p5InstanceRef.current) {
          p5InstanceRef.current.remove();
        }

        const sketch = (p: any) => {
          const canvasWidth = 1600;
          const canvasHeight = 800;
          const lineHeight = 40;
          const charWidth = 25;
          let t = 0;

          const createNoise = (seed: number) => {
            return p.noise(seed * 0.01) * 15 - 7.5;
          };

          const checkScreen = () => {
            if (typeof window !== 'undefined' && window.innerWidth < 900) {
              console.log("Please open this in desktop for best experience");
            }
          };

          const drawHandwritingStroke = (startX: number, startY: number, seed: number) => {
            const strokeLength = p.random(30, 80);
            const direction = p.random(0, p.TWO_PI);
            const curvature = p.random(-0.5, 0.5);
            
            const endX = startX + p.cos(direction) * strokeLength + createNoise(seed);
            const endY = startY + p.sin(direction) * strokeLength * 0.3 + createNoise(seed + 100);
            
            const cp1X = startX + p.cos(direction + curvature) * strokeLength * 0.3 + createNoise(seed + 200);
            const cp1Y = startY + p.sin(direction + curvature) * strokeLength * 0.2 + createNoise(seed + 300);
            
            const cp2X = endX - p.cos(direction - curvature) * strokeLength * 0.3 + createNoise(seed + 400);
            const cp2Y = endY - p.sin(direction - curvature) * strokeLength * 0.2 + createNoise(seed + 500);
            
            p.strokeWeight(p.random(0.8, 2.5));
            p.stroke(255, p.random(180, 255));
            
            p.bezier(startX, startY, cp1X, cp1Y, cp2X, cp2Y, endX, endY);
            
            if (p.random() > 0.7) {
              const dotX = endX + p.random(-5, 5);
              const dotY = endY + p.random(-3, 3);
              p.strokeWeight(p.random(1, 3));
              p.point(dotX, dotY);
            }
          };

          p.setup = () => {
            const canvas = p.createCanvas(canvasWidth, canvasHeight);
            canvas.parent(sketchRef.current);
            checkScreen();
            p.background(51);
          };

          p.draw = () => {
            p.background(51);
            
            for (let row = 0; row < canvasHeight / lineHeight; row++) {
              const baseY = row * lineHeight + 50;
              let currentX = 40 + p.random(-10, 10);
              
              const strokesInLine = p.random(15, 35);
              
              for (let i = 0; i < strokesInLine && currentX < canvasWidth - 50; i++) {
                const seed = row * 1000 + i * 100 + t;
                drawHandwritingStroke(currentX, baseY, seed);
                
                currentX += p.random(15, 45);
                
                if (p.random() > 0.85) {
                  currentX += p.random(20, 60);
                }
              }
            }
            
            p.noLoop();
          };
        };

        p5InstanceRef.current = new p5(sketch);
      }
    };

    loadP5();

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={sketchRef} 
      className="flex justify-center items-center w-full"
      style={{ maxWidth: '100%', overflow: 'auto' }}
    />
  );
};

export default P5Sketch;