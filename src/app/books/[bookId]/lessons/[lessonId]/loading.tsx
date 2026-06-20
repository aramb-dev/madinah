export default function LessonLoading() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
      <p className="font-arabic text-emerald-700 text-lg">
        جاري تحميل الدرس...
      </p>
      <p className="text-neutral-600">Loading lesson...</p>
    </div>
  );
}
