import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {
  return (
  <>
  <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        
    <Component {...pageProps} />
    <Analytics />
        </ThemeProvider>
  </>
);
}
