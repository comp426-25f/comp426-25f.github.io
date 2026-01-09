'use client';

import { useState, useEffect, useRef } from 'react';
import { Separator } from '../ui/separator';

function AnimatedNumber({
  target,
  label,
  isVisible,
  plus
}: {
  target: number;
  label: string;
  isVisible: boolean;
  plus?: boolean;
}) {
  const [count, setCount] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    const startTime = Date.now();
    const startValue = 1;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth easeOut - gentler slowdown
      const easeOut = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(startValue + (target - startValue) * easeOut);

      setCount(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsComplete(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, target]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-3xl font-bold">
        {count}
        {isComplete && plus ? '+' : ''}
      </p>
      <p className="text-center text-sm">{label}</p>
    </div>
  );
}

export default function TAStats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-row w-full gap-2 justify-between px-8 py-5 items-stretch">
      <AnimatedNumber
        target={279}
        label="Office hours tickets taken"
        isVisible={isVisible}
      />
      <div className="flex items-stretch py-2">
        <Separator orientation="vertical" />
      </div>
      <AnimatedNumber
        target={1300}
        plus={true}
        label="Programming assignments graded"
        isVisible={isVisible}
      />
      <div className="flex items-stretch py-2">
        <Separator orientation="vertical" />
      </div>
      <AnimatedNumber
        target={5000}
        plus={true}
        label="Reading questions graded"
        isVisible={isVisible}
      />
    </div>
  );
}
