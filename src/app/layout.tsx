import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Kazuma Kobayashi | Portfolio',
  description: '個人開発で成長中のエンジニアのポートフォリオサイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans">
        <Header />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}