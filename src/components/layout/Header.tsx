import React from 'react';
import { Toggle } from '@/components/ui/toggle';

const Header = () => {
  return (
    <header className="mb-8 pb-4 border-b border-amber-300">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 arabic-text text-center">
        قواعد اللغة العربية التفاعلية
      </h1>
      <p className="text-lg text-neutral-600 arabic-text text-center mt-1">
        شرح كتاب دروس اللغة العربية لغير الناطقين بها - الجزء الأول
      </p>
      <p className="text-sm text-neutral-500 english-text text-center mt-2">
        Interactive Arabic Grammar Rules - Explanation of Madinah Book 1
      </p>

      <div className="mt-6 hidden md:flex justify-center items-center">
        <label htmlFor="aiToggleDesktop" className="toggle-label">
          <span className="toggle-text-arabic">تفعيل ميزات الذكاء الاصطناعي التجريبية</span>
          <span className="toggle-switch">
            <input type="checkbox" id="aiToggleDesktop" className="ai-toggle-input" />
            <span className="slider"></span>
          </span>
          <span className="toggle-text-english">(Enable Experimental AI Features)</span>
        </label>
      </div>

      <div className="mt-4 p-4 bg-emerald-50 border-r-4 border-emerald-500 rounded-md shadow">
        <p className="arabic-text text-neutral-700 text-md">
          مرحباً! هذا التطبيق التفاعلي يوفر طريقة سهلة لاستكشاف قواعد اللغة العربية. اختر درساً من
          الشريط الجانبي. يمكنك تفعيل "ميزات الذكاء الاصطناعي" لطلب ✨ شرح إضافي أو ✨ أمثلة جديدة.
        </p>
        <p className="english-text text-neutral-600 text-sm mt-2">
          Welcome! This interactive app helps you explore Arabic grammar. Select a lesson from the
          sidebar. You can enable "AI Features" to request ✨ further explanation or ✨ new examples.
        </p>
      </div>
    </header>
  );
};

export default Header;
