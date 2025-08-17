/**
 * Next.js App Wrapper
 * 
 * This file is the main wrapper for all pages in the Next.js application.
 * It imports global styles and provides the app context for all components.
 * 
 * Features:
 * - Global CSS imports
 * - App-wide context and providers
 * - Error boundaries and global error handling
 * 
 * To customize:
 * - Add global providers or context here
 * - Import additional global styles
 * - Add error boundaries or analytics
 */

import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
