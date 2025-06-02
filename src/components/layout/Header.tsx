'use client';
import React from 'react';

import FontScaler from '@/components/custom/FontScaler'; // Changed to default import
import FontSelector from '@/components/custom/FontSelector';

const Header = () => {
  return (
    <header className="mb-8 pb-4 border-b border-amber-300">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 arabic-text font-arabic text-center">
        قواعد اللغة العربية التفاعلية
      </h1>
      <p className="text-lg text-neutral-600 arabic-text font-arabic text-center mt-1">
        شرح كتاب دروس اللغة العربية لغير الناطقين بها - الجزء الأول
      </p>
      <p className="text-sm text-neutral-500 english-text text-center mt-2">
        Interactive Arabic Grammar Rules - Explanation of Madinah Book 1
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <FontScaler /> {/* Added FontScaler component */}
        <FontSelector />
      </div>
    </header>
  );
};

export default Header;
