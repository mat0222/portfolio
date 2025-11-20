import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const LoadingScreen = ({
  onComplete
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before unmounting
          return 100;
        }
        // Random increment for realistic loading feel
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 200);
    return () => clearInterval(timer);
  }, [onComplete]);
  return <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4">
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-wider">Mateo Liendo</motion.h1>
        
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-gray-400 mb-8 text-sm tracking-widest uppercase">Cargando Portfolio...</motion.p>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
          <motion.div className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600" initial={{
          width: 0
        }} animate={{
          width: `${progress}%`
        }} transition={{
          ease: "linear"
        }} />
        </div>

        {/* Percentage */}
        <div className="w-full text-center">
          <span className="text-purple-400 text-sm font-mono">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>;
};
export default LoadingScreen;