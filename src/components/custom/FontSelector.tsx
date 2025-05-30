'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface FontOption {
  name: string;
  value: string;
  className: string;
}

const availableFonts: FontOption[] = [
  {
    name: 'Noto Naskh Arabic (Default)',
    value: "'Noto Naskh Arabic', sans-serif",
    className: 'font-noto-naskh-arabic',
  },
  {
    name: 'Noto Sans Arabic',
    value: "'Noto Sans Arabic', sans-serif",
    className: 'font-noto-sans-arabic',
  },
  {
    name: 'Baloo Arabic',
    value: "'Baloo Arabic', sans-serif",
    className: 'font-baloo-arabic',
  },
];

const FontSelector: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<string>(
    availableFonts[0].className
  );

  const applyFont = useCallback((fontClassName: string) => {
    document.documentElement.classList.remove(...availableFonts.map(f => f.className));
    document.documentElement.classList.add(fontClassName);
    localStorage.setItem('selectedArabicFont', fontClassName);
    setSelectedFont(fontClassName);
  }, []);

  useEffect(() => {
    const storedFont = localStorage.getItem('selectedArabicFont');
    if (storedFont && availableFonts.some(f => f.className === storedFont)) {
      applyFont(storedFont);
    } else {
      applyFont(availableFonts[0].className); // Apply default if nothing stored or invalid
    }
  }, [applyFont]);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    applyFont(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="font-select" className="text-sm text-neutral-700 whitespace-nowrap">
        اختر الخط:
      </label>
      <select
        id="font-select"
        value={selectedFont}
        onChange={handleFontChange}
        className="block w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
      >
        {availableFonts.map((font) => (
          <option key={font.className} value={font.className}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;