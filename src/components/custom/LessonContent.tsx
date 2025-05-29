import React, { useState } from 'react';
import { Lesson } from '@/data/lessons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GeminiModal from './GeminiModal';
import { callGeminiAPI } from '@/lib/gemini-api';

interface LessonContentProps {
  lesson?: Lesson;
  aiFeaturesEnabled?: boolean;
}

const LessonContent = ({ lesson, aiFeaturesEnabled = false }: LessonContentProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle explaining a rule further
  const handleExplainFurther = async (ruleName: string, arabicText: string, explanation: string) => {
    setModalOpen(true);
    setModalTitle(`شرح إضافي: ${ruleName}`);
    setLoading(true);
    setModalContent('');

    try {
      const content = await callGeminiAPI('explain', ruleName, arabicText, explanation);
      setModalContent(content);
    } catch (error) {
      console.error('Error fetching explanation:', error);
      setModalContent('<p>An error occurred. Please try again later.</p>');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle generating examples
  const handleGenerateExamples = async (ruleName: string, arabicText: string, explanation: string) => {
    setModalOpen(true);
    setModalTitle(`أمثلة لـ: ${ruleName}`);
    setLoading(true);
    setModalContent('');

    try {
      const content = await callGeminiAPI('examples', ruleName, arabicText, explanation);
      setModalContent(content);
    } catch (error) {
      console.error('Error generating examples:', error);
      setModalContent('<p>An error occurred. Please try again later.</p>');
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 arabic-text font-arabic mb-2">{lesson.title}</h2>
        <h3 className="text-lg sm:text-xl text-emerald-600 english-text mb-4">{lesson.englishTitle}</h3>

        <div className="mb-6 bg-white rounded-md p-3 sm:p-4 shadow-sm">
          <p className="arabic-text font-arabic text-neutral-700 mb-2 text-base sm:text-lg leading-relaxed">{lesson.introduction.arabic}</p>
          <p className="english-text text-neutral-600 text-xs sm:text-sm">{lesson.introduction.english}</p>
        </div>

        <div className="space-y-4">
          {lesson.rules.map((rule, index) => (
            <Card key={index} className="border-emerald-100">
              <CardHeader className="pb-2 px-4 py-3 sm:p-6 sm:pb-2">
                <CardTitle className="text-base sm:text-lg font-semibold text-emerald-700 font-arabic">{rule.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6">
                <p className="arabic-text font-arabic text-neutral-700 mb-2 text-base sm:text-lg leading-relaxed">{rule.arabicText}</p>
                <p className="english-text text-neutral-600 text-xs sm:text-sm">{rule.explanation}</p>

                {/* AI Feature Buttons - Hidden by default, shown when AI is enabled */}
                {aiFeaturesEnabled && (
                  <div className="gemini-btn-container mt-3 flex flex-col sm:flex-row gap-2 sm:justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gemini-btn bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700 text-xs sm:text-sm"
                      onClick={() => handleExplainFurther(rule.name, rule.arabicText, rule.explanation)}
                    >
                      ✨ Further Explanation
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gemini-btn bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-700 text-xs sm:text-sm"
                      onClick={() => handleGenerateExamples(rule.name, rule.arabicText, rule.explanation)}
                    >
                      ✨ Generate Examples
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gemini Modal */}
      <GeminiModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        loading={loading}
        content={modalContent}
      />
    </div>
  );
};

export default LessonContent;
