import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Layout showSidebar={false}>
      <Header homeUrl="/" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 font-arabic font-bold text-5xl text-emerald-700">
          404 - الصفحة غير موجودة
        </h1>
        <h2 className="mb-6 font-semibold text-3xl text-emerald-600">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-neutral-700">
          The page you are looking for does not seem to exist. You can return to the homepage to start over.
        </p>
        <Link href="/">
          <Button className="rounded-lg bg-emerald-600 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-emerald-700">
            <span className="ml-2 font-arabic">العودة إلى الرئيسية</span>
            <span>Return to Homepage</span>
          </Button>
        </Link>
      </div>
    </Layout>
  );
}