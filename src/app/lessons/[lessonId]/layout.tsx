import type { ReactNode } from "react"

// Define the props for the layout component
interface LessonLayoutProps {
  children: ReactNode
  params: Promise<{ lessonId: string }> // In Next.js 15+, params for dynamic routes are Promises
}

// This is an async component because we need to await the params
export default async function LessonLayout({ children, params }: LessonLayoutProps) {
  // The error "Cannot destructure property 'children' of 'undefined'" implies that
  // this component was called with `undefined` instead of a props object.
  // If Next.js calls this layout correctly, `children` and `params` will always be provided.

  // Await the params Promise to get the actual route parameters
  const routeParams = await params
  const lessonId = routeParams.lessonId // Extract lessonId

  return (
    <div className="lesson-layout">
      {/* 
        You can optionally use the lessonId here if needed, for example:
        <h1 className="text-lg font-semibold p-4">Lesson: {lessonId}</h1> 
      */}
      <div className="lesson-container">{children}</div>
    </div>
  )
}
