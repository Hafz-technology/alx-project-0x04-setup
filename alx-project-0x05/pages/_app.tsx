// pages/_app.tsx
import "../styles/global.css"; // <--- This import applies Tailwind to your whole app




import Layout from "@/components/layouts/Layout";

import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  )
}


