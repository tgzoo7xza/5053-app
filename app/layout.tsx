import type { Metadata } from "next";
// 1. เพิ่มการ import Prompt ตรงนี้
import { Geist, Geist_Mono, Prompt } from "next/font/google"; 
import "./globals.css";

// 2. ตั้งค่าฟอนต์ Prompt
const promptFont = Prompt({ 
  weight: ['400', '600', '700'],
  subsets: ['latin', 'thai'],
  variable: "--font-prompt", // ตั้งชื่อ variable ไว้ใช้ใน CSS (ถ้าจำเป็น)
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freshy Blend | น้ำปั่นผลไม้แท้ 100%",
  description: "สดชื่นเต็มคำกับน้ำปั่นผลไม้พรีเมียม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th"> 
      <body
        // 3. เพิ่ม promptFont.className เข้าไปใน body
        className={`${promptFont.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}