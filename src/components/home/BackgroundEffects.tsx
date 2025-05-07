import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  variant?: "dark" | "light";
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ variant = "dark" }) => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const isDark = variant === "dark";

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
    
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;
    
  //   let width = window.innerWidth;
  //   let height = window.innerHeight;
    
  //   const setCanvasSize = () => {
  //     width = window.innerWidth;
  //     height = window.innerHeight;
  //     canvas.width = width;
  //     canvas.height = height;
  //   };
    
  //   setCanvasSize();
  //   window.addEventListener("resize", setCanvasSize);
    
  //   // Particles
  //   const particleCount = 50; // Reduced particle count for subtlety if re-enabled
  //   const particles: {x: number; y: number; radius: number; color: string; speedX: number; speedY: number;}[] = [];
    
  //   // Create particles
  //   for (let i = 0; i < particleCount; i++) {
  //     particles.push({
  //       x: Math.random() * width,
  //       y: Math.random() * height,
  //       radius: Math.random() * 1.5 + 0.5, // Smaller particles
  //       color: isDark ? 
  //         `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 155)}, ${Math.random() * 0.2 + 0.05})` : // More transparent
  //         `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 150)}, ${Math.random() * 0.15 + 0.05})`,
  //       speedX: Math.random() * 0.1 - 0.05, // Slower speed
  //       speedY: Math.random() * 0.1 - 0.05  // Slower speed
  //     });
  //   }
    
  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     ctx.clearRect(0, 0, width, height);
      
  //     for (let i = 0; i < particleCount; i++) {
  //       const p = particles[i];
  //       p.x += p.speedX;
  //       p.y += p.speedY;
        
  //       if (p.x < 0) p.x = width;
  //       if (p.x > width) p.x = 0;
  //       if (p.y < 0) p.y = height;
  //       if (p.y > height) p.y = 0;
        
  //       ctx.beginPath();
  //       ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
  //       ctx.fillStyle = p.color;
  //       ctx.fill();
  //     }
      
  //     // Draw connections (optional, can be performance heavy)
  //     // ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.015)" : "rgba(0, 0, 0, 0.015)"; // More transparent connections
  //     // ctx.lineWidth = 0.3;
      
  //     // for (let i = 0; i < particleCount; i++) {
  //     //   for (let j = i + 1; j < particleCount; j++) {
  //     //     const p1 = particles[i];
  //     //     const p2 = particles[j];
  //     //     const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          
  //     //     if (distance < 120) { // Slightly larger connection distance if needed
  //     //       ctx.globalAlpha = 1 - (distance / 120);
  //     //       ctx.beginPath();
  //     //       ctx.moveTo(p1.x, p1.y);
  //     //       ctx.lineTo(p2.x, p2.y);
  //     //       ctx.stroke();
  //     //     }
  //     //   }
  //     // }
      
  //     ctx.globalAlpha = 1;
  //   };
    
  //   animate();
    
  //   return () => {
  //     window.removeEventListener("resize", setCanvasSize);
  //   };
  // }, [isDark]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" /> */}
      
      {/* Gradient orbs - made more subtle */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/10 blur-[100px] opacity-30"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-[45vw] h-[45vw] rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur-[100px] opacity-25"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Removed central orb and grid overlay to simplify */}
      {/* <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-[100px] opacity-30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      /> */}
      
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-30" /> */}
    </div>
  );
};

export default BackgroundEffects;
