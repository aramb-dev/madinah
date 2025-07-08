import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Layout showSidebar={false}>
      <Header homeUrl="/" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 mb-4 font-arabic">
          404 - الصفحة غير موجودة
        </h1>
        <h2 className="text-3xl font-semibold text-emerald-600 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-700 mb-8 max-w-md mx-auto">
          The page you are looking for does not seem to exist. You can return to the homepage to start over.
        </p>
        <Link href="/">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            <span className="font-arabic ml-2">العودة إلى الرئيسية</span>
            <span>Return to Homepage</span>
          </Button>
        </Link>
      </div>
    </Layout>
  );
}