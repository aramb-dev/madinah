export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFAF0]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
        <p className="font-arabic text-emerald-700 text-lg">جاري التحميل...</p>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
  );
}
