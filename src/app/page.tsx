"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { lessonsData } from "@/data/lessons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  // Redirect to first lesson
  useEffect(() => {
    // Optional: Auto-redirect to first lesson
    // If you want users to see this intro page first, comment this out
    // router.push(`/lessons/${lessonsData[0].id}`);
  }, [router]);

  return (
    <Layout
      onLessonSelect={(lessonId: string) => {
        router.push(`/lessons/${lessonId}`);
      }}
      aiFeaturesEnabled={false}
      setAiFeaturesEnabled={() => {}}
    >
      <Header />
      <div className="space-y-6">
        <Card className="border-emerald-100 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-emerald-700 font-arabic">مرحباً بك!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="arabic-text font-arabic text-neutral-700 mb-4">
              أهلاً بك في تطبيق قواعد اللغة العربية التفاعلية. اختر درساً من القائمة الجانبية للبدء، أو اختر من القائمة أدناه.
            </p>
            <p className="english-text text-neutral-600 mb-6">
              Welcome to the Interactive Arabic Grammar Rules application. Choose a lesson from the sidebar to begin, or select from the list below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {lessonsData.map((lesson) => (
                <Link href={`/lessons/${lesson.id}`} key={lesson.id} className="block">
                  <Button
                    variant="outline"
                    className="w-full text-right justify-between h-auto py-3 border-emerald-200 hover:bg-emerald-50"
                  >
                    <div>
                      <div className="font-arabic">{lesson.title}</div>
                      <div className="text-xs text-emerald-600 english-text text-left">
                        {lesson.englishTitle}
                      </div>
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
