/**
 * Next.js Document Wrapper
 * 
 * This file customizes the HTML document structure for the Next.js application.
 * It allows you to modify the <html> and <body> tags and add custom meta tags.
 * 
 * Features:
 * - Custom HTML document structure
 * - Meta tags and SEO optimization
 * - Font preloading and optimization
 * 
 * To customize:
 * - Add custom meta tags
 * - Modify the HTML structure
 * - Add external scripts or fonts
 */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        
        {/* Meta tags for SEO */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph default meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Data Scientist Portfolio" />
        
        {/* Twitter Card default meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourusername" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
