"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DotIndicatorProps {
  videos: string[];
}

export default function DotIndicator({ videos }: DotIndicatorProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % videos.length),
      5000 // same as your VideoCarousel timing
    );
    return () => clearInterval(interval);
  }, [videos]);

  return (
    <div className="flex gap-3 mt-2">
      {videos.map((_, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: current === index ? 1.3 : 0.8,
            opacity: current === index ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
          className="w-2 md:w-3 h-2 md:h-3 p:1 md:p-1.5  bg-gray-800"
        />
      ))}
    </div>
  );
}
