import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";


const opensans = Open_Sans({ 
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Indre Matre",
  description: "En liten plass på Vestlandet, med spektakulær utsikt og natur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={opensans.className}>{children}
      </body>
    </html>
  );
}
