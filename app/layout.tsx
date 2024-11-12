import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CyberpunkFooter from "./components/footer";
import Navbar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeueLTProLt.otf",
  variable: "--font-helvetica-neue",
  display: "swap",
});

const helveticaNeuebold = localFont({
  src: "./fonts/HelveticaNeueLTProBlkIt.otf",
  variable: "--font-helvetica-neue",
  display: "swap",
});


const asgard = localFont({
  src: "./fonts/Asgard.otf",
  variable: "--font-asgard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feline",
  description: "Team Feline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${helveticaNeue.variable} ${asgard.variable}  font-helvetica-neue antialiased`}
      >
           <Navbar/>
        {children}
        <CyberpunkFooter />
      </body>
    </html>
  );
}