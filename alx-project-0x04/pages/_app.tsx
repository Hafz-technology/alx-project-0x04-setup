// pages/_app.tsx
import "../styles/global.css"; // <--- This import applies Tailwind to your whole app
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

