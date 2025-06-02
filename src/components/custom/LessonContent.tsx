import React from 'react';
import { Lesson } from '@/data/lessons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LessonContentProps {
  lesson?: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  if (!lesson) {
    return (
      <div id="lessonContent" className="space-y-4 sm:space-y-6">
        <p className="arabic-text font-arabic text-lg sm:text-xl text-neutral-500 text-center pt-6 sm:pt-10 px-4">
          الرجاء اختيار درس من القائمة الجانبية لعرض محتواه.
        </p>
        <p className="english-text text-base sm:text-lg text-neutral-500 text-center px-4">
          Please select a lesson from the sidebar to view its content.
        </p>
      </div>
    );
  }

  return (
    <div id="lessonContent" className="space-y-6">
      <div className="bg-amber-50 rounded-lg p-4 sm:p-6 border border-amber-200">
        <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 arabic-text font-arabic mb-2">
          {lesson.title}
        </h2>
        <h3 className="text-lg sm:text-xl text-emerald-600 english-text mb-4">
          {lesson.englishTitle}
        </h3>

        <div className="mb-6 bg-white rounded-md p-3 sm:p-4 shadow-sm">
          <p className="arabic-text font-arabic text-neutral-700 mb-2 text-base sm:text-lg leading-relaxed">
            {lesson.introduction.arabic}
          </p>
          <p className="english-text text-neutral-600 text-xs sm:text-sm">
            {lesson.introduction.english}
          </p>
        </div>

        <div className="space-y-4">
          {lesson.rules.map((rule, index) => (
            <Card key={index} className="border-emerald-100">
              <CardHeader className="pb-2 px-4 py-3 sm:p-6 sm:pb-2">
                <CardTitle className="text-base sm:text-lg font-semibold text-emerald-700 font-arabic">
                  {rule.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6">
                <p className="arabic-text font-arabic text-neutral-700 mb-2 text-base sm:text-lg leading-relaxed">
                  {rule.arabicText}
                </p>
                <p className="english-text text-neutral-600 text-xs sm:text-sm">
                  {rule.explanation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
