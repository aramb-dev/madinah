'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const FontScaler = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const savedScale = localStorage.getItem('font-scale');
    if (savedScale) {
      setScale(parseFloat(savedScale));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale-factor', scale.toString());
    localStorage.setItem('font-scale', scale.toString());
  }, [scale]);

  const increaseScale = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 2)); // Max scale 200%
  };

  const decreaseScale = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Min scale 50%
  };

  return (
    <div className="flex items-center space-x-2 p-2 border rounded-md bg-background">
      <Button onClick={decreaseScale} variant="outline" size="icon" aria-label="Decrease font size">
        -
      </Button>
      <span className="min-w-[40px] text-center">{Math.round(scale * 100)}%</span>
      <Button onClick={increaseScale} variant="outline" size="icon" aria-label="Increase font size">
        +
      </Button>
    </div>
  );
};

export default FontScaler;
