import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0] py-8" dir="ltr">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">API Documentation</h1>
          <p className="text-lg text-neutral-600 mb-6">
            Comprehensive documentation for the Madinah Books API
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
              REST API
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
              JSON Responses
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300">
              No Authentication Required
            </Badge>
          </div>
          <Link href="/" className="text-purple-600 hover:text-purple-800 underline">
            ← Back to Home
          </Link>
        </div>

        {/* Quick Start */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">Quick Start</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-neutral-700">
                The Madinah Books API provides access to Arabic learning content from the Madinah book series.
                All endpoints return JSON responses and require no authentication.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold mb-2">Base URL:</p>
                <code className="text-purple-600">https://madinah.arabic.aramb.dev/api</code>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold mb-2">Example Request:</p>
                <code className="text-purple-600">GET /api/books</code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <div className="grid gap-8">
          {/* Books Endpoints */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">Books Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* GET /api/books */}
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get all available books with their lessons</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">Response Schema:</p>
                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "success": true,
  "data": [
    {
      "id": "book1",
      "title": {
        "ar": "الكتاب الأساسي",
        "en": "Book 1"
      },
      "description": {
        "arabic": "...",
        "english": "..."
      },
      "lessons": [...],
      "available": true
    }
  ],
  "count": 3
}`}
                    </pre>
                  </div>
                </div>

                {/* GET /api/books/{bookId} */}
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books/{'{bookId}'}</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get a specific book by ID</p>
                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <p className="font-semibold mb-1">Parameters:</p>
                    <ul className="text-sm text-gray-700">
                      <li><code>bookId</code> (string): book1, book2, or book3</li>
                    </ul>
                  </div>
                </div>

                {/* GET /api/books/{bookId}/lessons */}
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books/{'{bookId}'}/lessons</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get all lessons for a specific book</p>
                </div>

                {/* GET /api/books/{bookId}/lessons/{lessonId} */}
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books/{'{bookId}'}/lessons/{'{lessonId}'}</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get a specific lesson from a specific book</p>
                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <p className="font-semibold mb-1">Parameters:</p>
                    <ul className="text-sm text-gray-700">
                      <li><code>bookId</code> (string): book1, book2, or book3</li>
                      <li><code>lessonId</code> (string): lesson1, lesson2, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lessons Endpoints */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Lessons Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* GET /api/lessons */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">GET</Badge>
                    <code className="text-lg font-mono">/api/lessons</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get all lessons from all books</p>
                </div>

                {/* GET /api/lesson-titles */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">GET</Badge>
                    <code className="text-lg font-mono">/api/lesson-titles</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get titles of all lessons across all books</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metadata Endpoints */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-700">Metadata Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* GET /api/metadata */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="text-lg font-mono">/api/metadata</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get global metadata about all books and lessons</p>
                </div>

                {/* GET /api/books/{bookId}/metadata */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books/{'{bookId}'}/metadata</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get metadata for a specific book</p>
                </div>

                {/* GET /api/books/{bookId}/lesson-titles */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books/{'{bookId}'}/lesson-titles</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get titles of all lessons in a specific book</p>
                </div>

                {/* GET /api/books/{bookId}/rule-count */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="text-lg font-mono">/api/books/{'{bookId}'}/rule-count</code>
                  </div>
                  <p className="text-neutral-700 mb-3">Get rule statistics for a specific book</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Structures */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-700">Data Structures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Book Schema */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Book</h4>
                  <div className="bg-gray-50 p-4 rounded">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "id": "string",
  "title": {
    "ar": "string",
    "en": "string"
  },
  "description": {
    "arabic": "string",
    "english": "string"
  },
  "lessons": "Array<Lesson>",
  "available": "boolean",
  "comingSoon": "boolean (optional)"
}`}
                    </pre>
                  </div>
                </div>

                {/* Lesson Schema */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Lesson</h4>
                  <div className="bg-gray-50 p-4 rounded">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "id": "string",
  "title": {
    "ar": "string",
    "en": "string"
  },
  "introduction": {
    "arabic": "string",
    "english": "string"
  },
  "rules": "Array<Rule>"
}`}
                    </pre>
                  </div>
                </div>

                {/* Rule Schema */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Rule</h4>
                  <div className="bg-gray-50 p-4 rounded">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "name": "string",
  "arabicText": "string",
  "explanation": "string"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LLM Training Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-indigo-700">LLM Training Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-neutral-700">
                  This section provides structured information for Large Language Models (LLMs) to understand and integrate with our API.
                </p>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">API Summary for LLMs:</h4>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• Base URL: /api</li>
                    <li>• Authentication: None required</li>
                    <li>• Response Format: JSON</li>
                    <li>• Available Resources: Books, Lessons, Metadata</li>
                    <li>• Primary Use Case: Arabic language learning content access</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Common Integration Patterns:</h4>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• Use /api/metadata for overview and navigation</li>
                    <li>• Use /api/books for complete book data</li>
                    <li>• Use /api/lesson-titles for quick content discovery</li>
                    <li>• Use /api/books/{'{bookId}'}/metadata for book-specific information</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Error Handling:</h4>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• 404: Resource not found</li>
                    <li>• 500: Internal server error</li>
                    <li>• All errors return JSON with success: false</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-4">
                Need help or have questions about the API? Contact us for support.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/" className="text-purple-600 hover:text-purple-800 underline">
                  Back to Home
                </Link>
                <Link href="/api" className="text-purple-600 hover:text-purple-800 underline">
                  API Index
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}