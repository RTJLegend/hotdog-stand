import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Gold Star Dogs — Classic Hot Dogs, Loaded Right",
  description: "Menu, hours, order-ahead pickup, and catering for Gold Star Dogs on W Madison St, Chicago.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${workSans.variable}`}>
      <body>
        <noscript>
          <style>{`.rv,.rv-group>*,[data-hero]{opacity:1!important;transform:none!important}.ticker-track{animation:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
