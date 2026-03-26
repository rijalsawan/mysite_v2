import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Open Graph / Social Share Meta Tags */}
        <meta property="og:title" content="SAWAN.DEV | Software Developer" />
        <meta property="og:description" content="Portfolio of Sawan, a passionate developer creating awesome experiences." />
        <meta property="og:image" content="/share-image.png" />
        <meta property="og:url" content="https://sawan.dev" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAWAN.DEV | Software Developer" />
        <meta name="twitter:description" content="Portfolio of Sawan, a passionate developer creating awesome experiences." />
        <meta name="twitter:image" content="/share-image.png" />
      </Head>
      <body className="antialiased">
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
