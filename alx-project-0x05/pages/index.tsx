// pages/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router'; // For imperative routing
import Layout from '@/components/layouts/Layout';
import Button from '@/components/common/Button';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Splash App | Home</title>
        <meta name="description" content="Welcome to Splash App" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Splash App
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          This application demonstrates modern web development practices including shared layouts, routing, and component architecture.
        </p>

        <div className="flex gap-4">
          <Button 
            buttonLabel="Browse Services" 
            buttonBackgroundColor="blue" 
            action={() => router.push('/services')} 
          />
          <Button 
            buttonLabel="Contact Us" 
            buttonBackgroundColor="green" 
            action={() => router.push('/contact')} 
          />
        </div>
      </div>
    </Layout>
  );
}


// *****************************************************************
// const Home = () => {
//   return (
//    <div>
//     <h1> Welcome to Splash App </h1>
//    </div>
//   )
// }

// export default Home;

// *********************************************************************
// import Button from "@/components/common/Button";
// import { useRouter } from "next/router";

// interface PageRouteProps {
//   pageRoute: string
// }

// export default function Home() {
//   const router = useRouter()

//   // Imeperative routing with useRouter
//   const routeToNextPage  = ({ pageRoute }: PageRouteProps) => {
//     router.push(pageRoute, undefined, { shallow: false})
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
//       {/* Welcome Message */}
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         Welcome to Splash App!
//       </h1>
//       <p className="text-lg text-gray-600 mb-8">
//         Your one-stop platform for everything AI you need. Start exploring by
//         navigating to our features below.
//       </p>

//       {/* Navigation Options */}
//       <div className="flex gap-6">
//         <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Generate Text" buttonBackgroundColor="blue" />
//         <Button action={() => routeToNextPage({ pageRoute: '/text-to-image'})} buttonLabel="Text to Image" buttonBackgroundColor="green" />
//         <Button action={() => routeToNextPage({ pageRoute: '/counter-app'})} buttonLabel="Contact us" buttonBackgroundColor="orange" />
//       </div>
//     </div>
//   );
// }
