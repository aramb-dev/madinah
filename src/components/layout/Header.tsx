'use client';
import React, { useState, useEffect } from 'react';
import { XIcon } from 'lucide-react';
import FontScaler from '@/components/custom/FontScaler'; // Changed to default import
import FontSelector from '@/components/custom/FontSelector';

const Header = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const isWelcomeMessageHidden = localStorage.getItem('welcomeMessageHidden');
    if (isWelcomeMessageHidden === 'true') {
      setShowWelcomeMessage(false);
    }
  }, []);

  const hideWelcomeMessage = () => {
    setShowWelcomeMessage(false);
    localStorage.setItem('welcomeMessageHidden', 'true');
  };

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

      {showWelcomeMessage && (
        <div className="mt-4 p-4 bg-emerald-50 border-r-4 border-emerald-500 rounded-md shadow relative">
          <button
            onClick={hideWelcomeMessage}
            className="absolute top-2 left-2 text-emerald-700 hover:text-emerald-900 focus:outline-none"
            aria-label="Close welcome message"
          >
            <XIcon className="h-5 w-5" />
          </button>
          <p className="arabic-text font-arabic text-neutral-700 text-md pr-7">
            مرحباً! هذا التطبيق التفاعلي يوفر طريقة سهلة لاستكشاف قواعد اللغة العربية. اختر درساً من
            الشريط الجانبي.
          </p>
          <p className="english-text text-neutral-600 text-sm mt-2">
            Welcome! This interactive app helps you explore Arabic grammar. Select a lesson from the
            sidebar.
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
