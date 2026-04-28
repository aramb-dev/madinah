
import type { Lesson } from '@/data/lessons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LessonContentProps {
  lesson?: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  if (!lesson) {
    return (
      <div id="lessonContent" className="space-y-4 sm:space-y-6">
        <p className="arabic-text px-4 pt-6 text-center font-arabic text-lg text-neutral-500 sm:pt-10 sm:text-xl">
          الرجاء اختيار درس من القائمة الجانبية لعرض محتواه.
        </p>
        <p className="english-text px-4 text-center text-base text-neutral-500 sm:text-lg">
          Please select a lesson from the sidebar to view its content.
        </p>
      </div>
    );
  }

  return (
    <div id="lessonContent" className="space-y-6">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 sm:p-6">
        <h2 className="arabic-text mb-2 font-arabic font-bold text-emerald-700 text-xl sm:text-2xl">
          {lesson.title.ar}
        </h2>
        <h3 className="english-text mb-4 text-emerald-600 text-lg sm:text-xl">{lesson.title.en}</h3>

        <div className="mb-6 rounded-md bg-white p-3 shadow-sm sm:p-4">
          <p className="arabic-text mb-2 font-arabic text-base text-neutral-700 leading-relaxed sm:text-lg">
            {lesson.introduction.arabic}
          </p>
          <p className="english-text text-neutral-600 text-xs sm:text-sm">
            {lesson.introduction.english}
          </p>
        </div>

        <div className="space-y-4">
          {lesson.rules.map((rule) => (
            <Card key={rule.name} className="border-emerald-100">
              <CardHeader className="px-4 py-3 pb-2 sm:p-6 sm:pb-2">
                <CardTitle className="font-arabic font-semibold text-base text-emerald-700 sm:text-lg">
                  {rule.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6">
                <p className="arabic-text mb-2 font-arabic text-base text-neutral-700 leading-relaxed sm:text-lg">
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
