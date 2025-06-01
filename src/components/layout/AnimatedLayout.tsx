'use client';

import React from 'react';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
  return <div className="flex-grow">{children}</div>;
};

export default AnimatedLayout;