import { Cairo, Tajawal } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "مكتبة الحوزة العلمية",
    template: "%s | مكتبة الحوزة العلمية",
  },
  description:
    "موقع يقدم أشهر كتب الدراسة الحوزوية مرتبة حسب المراحل، مع وصف علمي واضح لكل كتاب لتسهيل طريق طالب العلم.",
  applicationName: "مكتبة الحوزة العلمية",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "مكتبة الحوزة العلمية",
    siteName: "مكتبة الحوزة العلمية",
    description:
      "كتب حوزوية مرتبة لكل مرحلة دراسية، مع شروح مختصرة ومنهجية واضحة.",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">{/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1MTZXGJFRS"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1MTZXGJFRS', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <body
        className={`${cairo.variable} ${tajawal.variable} font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
