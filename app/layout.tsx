import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/newsreader";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyrilmandin.vercel.app"),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
