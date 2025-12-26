import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo", 
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal", 
});


export const metadata = {
  title: "مكتبة الحوزة العلمية: كتب مرتبة لكل مرحلة دراسية",
  description: "موقعنا يقدم أشهر كتب الدراسة الحوزوية بشكل مرتب وسهل الوصول. صُمم لتسهيل بحث طالب العلم، حيث يجد الكتب الأساسية لكل مرحلة مع وصف واضح لكل كتاب، مما يتيح الوصول السريع للمعلومة وتنظيم الدراسة بشكل أفضل."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${cairo.variable} ${tajawal.variable} font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
