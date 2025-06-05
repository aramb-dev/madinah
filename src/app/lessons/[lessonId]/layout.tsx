import type { Metadata } from 'next';
import { book1Data } from '@/data/book1';

type GenerateMetadataProps = {
  params: Promise<{ lessonId: string }>;
};

// Function to map lesson IDs to image filenames
function getLessonImageFilename(lessonId: string): string {
  // Map lesson IDs to their corresponding image filenames
  const imageMap: { [key: string]: string } = {
    lesson1: 'L1.png',
    lesson2: 'L2.png',
    lesson3: 'L3.png',
    lesson4: 'L4.png',
    lesson5: 'L5.png',
    lesson6: 'L6.png',
    lesson7: 'L7.png',
    lesson8: 'L8.png',
    lesson9: 'L9.png',
    lesson10: 'L10.png',
    lesson11: 'L11.png',
    lesson12: 'L12.png',
    lesson13: 'L13.png',
    lesson14: 'L14.png',
    lesson15: 'L15.png',
    lesson16_17: 'L16-17.png',
    lesson18: 'L18.png',
    lesson19_20: 'L19-20.png',
    lesson21: 'L21.png',
    lesson22_23: 'L22-23.png',
  };

  return imageMap[lessonId] || 'home.png'; // Fallback to home.png if lesson not found
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { lessonId } = await params;

  // Find the lesson data
  const lesson = book1Data.lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    // Fallback metadata if lesson not found
    return {
      title: 'المصادر المعينة على فهم كتب المدينة - شرح كتاب المدينة ١',
      description: 'Madinah Book Resources - Explanation of Madinah Book 1',
      openGraph: {
        title: 'المصادر المعينة على فهم كتب المدينة - شرح كتاب المدينة ١',
        description: 'Madinah Book Resources - Explanation of Madinah Book 1',
        images: ['/images/social-share/home.png'],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'المصادر المعينة على فهم كتب المدينة - شرح كتاب المدينة ١',
        description: 'Madinah Book Resources - Explanation of Madinah Book 1',
        images: ['/images/social-share/home.png'],
      },
    };
  }

  const imageFilename = getLessonImageFilename(lessonId);
  const socialShareImage = `/images/social-share/${imageFilename}`;

  const title = `${lesson.title.ar} - ${lesson.title.en} | المصادر المعينة على فهم كتب المدينة`;
  const description = lesson.introduction.english;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [socialShareImage],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialShareImage],
    },
  };
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
