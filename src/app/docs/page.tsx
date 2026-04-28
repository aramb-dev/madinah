'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0] py-8" dir="ltr">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-purple-700">API Documentation</h1>
          <p className="mb-6 text-lg text-neutral-600">
            Comprehensive documentation for the Madinah Books API
          </p>
          <div className="mb-6 flex justify-center gap-4">
            <Badge variant="outline" className="border-green-300 bg-green-100 text-green-700">
              REST API
            </Badge>
            <Badge variant="outline" className="border-blue-300 bg-blue-100 text-blue-700">
              JSON Responses
            </Badge>
            <Badge variant="outline" className="border-purple-300 bg-purple-100 text-purple-700">
              No Authentication Required
            </Badge>
          </div>
          <Link href="/" className="text-purple-600 underline hover:text-purple-800">
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
                The Madinah Books API provides access to Arabic learning content from the Madinah
                book series. All endpoints return JSON responses and require no authentication.
              </p>
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="mb-2 font-semibold">Base URL:</p>
                <code className="text-purple-600">https://madinah.arabic.aramb.dev/api</code>
              </div>
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="mb-2 font-semibold">Example Request:</p>
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
              <CardTitle className="text-emerald-700 text-xl">Books Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* GET /api/books */}
                <div className="border-emerald-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="font-mono text-lg">/api/books</code>
                  </div>
                  <p className="mb-3 text-neutral-700">
                    Get all available books with their lessons
                  </p>
                  <div className="rounded bg-gray-50 p-3">
                    <p className="mb-1 font-semibold">Response Schema:</p>
                    <pre className="overflow-x-auto text-gray-700 text-sm">
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
                <div className="border-emerald-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="font-mono text-lg">/api/books/{'{bookId}'}</code>
                  </div>
                  <p className="mb-3 text-neutral-700">Get a specific book by ID</p>
                  <div className="mb-3 rounded bg-gray-50 p-3">
                    <p className="mb-1 font-semibold">Parameters:</p>
                    <ul className="text-gray-700 text-sm">
                      <li>
                        <code>bookId</code> (string): book1, book2, or book3
                      </li>
                    </ul>
                  </div>
                </div>

                {/* GET /api/books/{bookId}/lessons */}
                <div className="border-emerald-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="font-mono text-lg">/api/books/{'{bookId}'}/lessons</code>
                  </div>
                  <p className="mb-3 text-neutral-700">Get all lessons for a specific book</p>
                </div>

                {/* GET /api/books/{bookId}/lessons/{lessonId} */}
                <div className="border-emerald-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="font-mono text-lg">
                      /api/books/{'{bookId}'}/lessons/{'{lessonId}'}
                    </code>
                  </div>
                  <p className="mb-3 text-neutral-700">
                    Get a specific lesson from a specific book
                  </p>
                  <div className="mb-3 rounded bg-gray-50 p-3">
                    <p className="mb-1 font-semibold">Parameters:</p>
                    <ul className="text-gray-700 text-sm">
                      <li>
                        <code>bookId</code> (string): book1, book2, or book3
                      </li>
                      <li>
                        <code>lessonId</code> (string): lesson1, lesson2, etc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lessons Endpoints */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 text-xl">Lessons Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* GET /api/lessons */}
                <div className="border-blue-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-blue-600">GET</Badge>
                    <code className="font-mono text-lg">/api/lessons</code>
                  </div>
                  <p className="mb-3 text-neutral-700">Get all lessons from all books</p>
                </div>

                {/* GET /api/lesson-titles */}
                <div className="border-blue-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-blue-600">GET</Badge>
                    <code className="font-mono text-lg">/api/lesson-titles</code>
                  </div>
                  <p className="mb-3 text-neutral-700">
                    Get titles of all lessons across all books
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metadata Endpoints */}
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-700 text-xl">Metadata Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* GET /api/metadata */}
                <div className="border-purple-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="font-mono text-lg">/api/metadata</code>
                  </div>
                  <p className="mb-3 text-neutral-700">
                    Get global metadata about all books and lessons
                  </p>
                </div>

                {/* GET /api/books/{bookId}/metadata */}
                <div className="border-purple-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="font-mono text-lg">/api/books/{'{bookId}'}/metadata</code>
                  </div>
                  <p className="mb-3 text-neutral-700">Get metadata for a specific book</p>
                </div>

                {/* GET /api/books/{bookId}/lesson-titles */}
                <div className="border-purple-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="font-mono text-lg">/api/books/{'{bookId}'}/lesson-titles</code>
                  </div>
                  <p className="mb-3 text-neutral-700">
                    Get titles of all lessons in a specific book
                  </p>
                </div>

                {/* GET /api/books/{bookId}/rule-count */}
                <div className="border-purple-500 border-l-4 pl-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-purple-600">GET</Badge>
                    <code className="font-mono text-lg">/api/books/{'{bookId}'}/rule-count</code>
                  </div>
                  <p className="mb-3 text-neutral-700">Get rule statistics for a specific book</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Structures */}
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700 text-xl">Data Structures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Book Schema */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">Book</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
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
                  <h4 className="mb-3 font-semibold text-lg">Lesson</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
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
  "rules": "Array<Rule>",
  "vocabulary": "Array<VocabularyItem> (optional)"
}`}
                    </pre>
                  </div>
                </div>

                {/* Rule Schema */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">Rule</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`{
  "name": "string",
  "arabicText": "string",
  "explanation": "string"
}`}
                    </pre>
                  </div>
                </div>

                {/* VocabularyItem Schema */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">VocabularyItem</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`{
  "id": "string",
  "word": "string",
  "transliteration": "string",
  "translation": {
    "en": "string"
  },
  "type": "string (WordType enum)",
  "root": "string (optional)",
  "plural": "string (optional)",
  "gender": "string (Gender enum, optional)",
  "conjugation": "VerbConjugation (optional)",
  "definition": "string",
  "examples": "Array<Example>",
  "notes": "string (optional)",
  "difficulty": "string (DifficultyLevel enum)",
  "tags": "Array<string>",
  "relatedWords": "Array<string> (optional)",
  "bookId": "string (optional)",
  "lessonId": "string | number (optional)"
}`}
                    </pre>
                  </div>
                </div>

                {/* WordType Enum */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">WordType Enum</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`"noun" | "verb" | "adjective" | "adverb" | "preposition" | "pronoun" | "conjunction" | "particle" | "expression" | "number" | "proper noun"`}
                    </pre>
                  </div>
                </div>

                {/* DifficultyLevel Enum */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">DifficultyLevel Enum</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`"beginner" | "intermediate" | "advanced"`}
                    </pre>
                  </div>
                </div>

                {/* Gender Enum */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">Gender Enum</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`"masculine" | "feminine" | "neuter" | "dual"`}
                    </pre>
                  </div>
                </div>

                {/* Example Schema */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">Example</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`{
  "arabic": "string",
  "english": "string",
  "notes": "string (optional)"
}`}
                    </pre>
                  </div>
                </div>

                {/* VerbConjugation Schema */}
                <div>
                  <h4 className="mb-3 font-semibold text-lg">VerbConjugation</h4>
                  <div className="rounded bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-gray-700 text-sm">
                      {`{
  "past": {
    "singular": {
      "first": "string",
      "secondMasculine": "string",
      "secondFeminine": "string",
      "thirdMasculine": "string",
      "thirdFeminine": "string"
    },
    "plural": {
      "first": "string",
      "second": "string",
      "thirdMasculine": "string",
      "thirdFeminine": "string"
    }
  },
  "present": {
    "singular": {
      "first": "string",
      "secondMasculine": "string",
      "secondFeminine": "string",
      "thirdMasculine": "string",
      "thirdFeminine": "string"
    },
    "plural": {
      "first": "string",
      "second": "string",
      "thirdMasculine": "string",
      "thirdFeminine": "string"
    }
  },
  "imperative": {
    "singular": {
      "masculine": "string",
      "feminine": "string"
    },
    "plural": "string"
  } (optional),
  "verbalNoun": "string (optional)",
  "activeParticiple": "string (optional)",
  "passiveParticiple": "string (optional)"
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
              <CardTitle className="text-indigo-700 text-xl">LLM Training Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-neutral-700">
                  This section provides structured information for Large Language Models (LLMs) to
                  understand and integrate with our API.
                </p>

                <div className="rounded-lg bg-indigo-50 p-4">
                  <h4 className="mb-2 font-semibold text-indigo-800">API Summary for LLMs:</h4>
                  <ul className="space-y-1 text-indigo-700 text-sm">
                    <li>• Base URL: /api</li>
                    <li>• Authentication: None required</li>
                    <li>• Response Format: JSON</li>
                    <li>• Available Resources: Books, Lessons, Metadata</li>
                    <li>• Primary Use Case: Arabic language learning content access</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-indigo-50 p-4">
                  <h4 className="mb-2 font-semibold text-indigo-800">
                    Common Integration Patterns:
                  </h4>
                  <ul className="space-y-1 text-indigo-700 text-sm">
                    <li>• Use /api/metadata for overview and navigation</li>
                    <li>• Use /api/books for complete book data</li>
                    <li>• Use /api/lesson-titles for quick content discovery</li>
                    <li>• Use /api/books/{'{bookId}'}/metadata for book-specific information</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-indigo-50 p-4">
                  <h4 className="mb-2 font-semibold text-indigo-800">Error Handling:</h4>
                  <ul className="space-y-1 text-indigo-700 text-sm">
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
              <p className="mb-4 text-gray-600 text-sm">
                Need help or have questions about the API? Contact us for support.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/" className="text-purple-600 underline hover:text-purple-800">
                  Back to Home
                </Link>
                <Link href="/api" className="text-purple-600 underline hover:text-purple-800">
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
