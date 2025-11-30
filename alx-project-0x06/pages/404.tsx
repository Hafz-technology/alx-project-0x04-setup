// pages/404.tsx
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa'; // Example of using React Icons
import Layout from '@/components/layouts/Layout';

export default function Custom404() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-700 font-semibold underline"
        >
          Go back home
        </Link>
      </div>
    </Layout>
  );
}


