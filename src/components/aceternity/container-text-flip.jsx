"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerTextFlip = ({
  words,
  duration = 2000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[nextIndex]);
      setIsAnimating(true);
    }, duration);

    return () => clearInterval(interval);
  }, [currentWord, words, duration]);

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -10,
          position: "absolute",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        key={currentWord}
        className={cn(
          "inline-block text-left px-2",
          className
        )}
      >
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};