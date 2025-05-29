// This is a basic structure for your dynamic lesson page.
// In Next.js 15+, params for dynamic routes are Promises.

interface LessonPageProps {
  params: Promise<{ lessonId: string }>
  // You can also include searchParams if needed:
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const routeParams = await params
  const lessonId = routeParams.lessonId

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lesson Details</h1>
      <p>
        Displaying content for Lesson ID: <span className="font-semibold">{lessonId}</span>
      </p>
      {/* Add your lesson-specific content here */}
      <p>
        This is the page for lesson {lessonId}. You should replace this placeholder content with the actual content for
        your lesson.
      </p>
    </div>
  )
}
