import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Gold Star Dogs | Classic Hot Dogs, Loaded Right",
  description: "Menu, hours, order-ahead pickup, and catering for Gold Star Dogs on W Madison St, Chicago.",
  metadataBase: new URL("https://hotdog-stand-one.vercel.app"),
  openGraph: {
    title: "Gold Star Dogs | Classic Hot Dogs, Loaded Right",
    description: "Snappy all-beef dogs, loaded specials, shakes and catering in the Chicago Loop.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${workSans.variable}`}>
      <body>
        <ScrollProgress />
        <noscript>
          <style>{`.rv,.rv-group>*,[data-hero],.menu-card-item{opacity:1!important;transform:none!important}.wipe{clip-path:none!important}.ticker-track{animation:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
