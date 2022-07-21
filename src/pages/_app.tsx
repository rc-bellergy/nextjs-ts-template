import { AppProps } from 'next/app';
import '@/styles/design_tokens.css';
import '@/styles/global.css';
import '@/styles/utilities.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
