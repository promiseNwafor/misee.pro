import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Misee Pro',
  description: 'Frontend Engineer with 4+ years of experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background text-secondary`}>
        {/* <Header /> */}
          <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
