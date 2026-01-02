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

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "مكتبة الحوزة العلمية",
    description:
      "كتب حوزوية مرتبة لكل مرحلة دراسية، مع شروح مختصرة ومنهجية واضحة.",
    url: "https://kutub-alhauza.netlify.app/",
    siteName: "مكتبة الحوزة العلمية",
    images: [
      {
        url: "https://kutub-alhauza.netlify.app/favicon.icon",
        width: 512,
        height: 512,
        alt: "مكتبة الحوزة العلمية",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="ar" className=" scroll-smooth">{/* Google Analytics */}

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
