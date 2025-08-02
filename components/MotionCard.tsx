"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
}

const MotionCard = ({ children, className = "" }: MotionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(200px circle at ${x}px ${y}px, rgba(255, 215, 0, 0.35), transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl p-8 shadow-lg shadow-gray-300 bg-gray-100 transition-all duration-300 ease-in-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: isHovering ? background : "transparent",
          opacity: isHovering ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default MotionCard;
