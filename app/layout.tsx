import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://gravestones.netlify.app/"),
  title: "AL-Quran Teach || Online Academy",
  description:
    "Al-Quran Online Academy offers Quran learning courses with expert tutors. Learn Tajweed, Quran memorization, and Islamic studies online from anywhere in the world.",

  keywords: [
    "Al-Quran Online Academy",
    "Learn Quran Online",
    "Online Quran Classes",
    "Quran with Tajweed",
    "Hifz e Quran",
    "Quran Memorization",
    "Islamic Studies",
    "Online Quran Tutor",
    "Tajweed Classes",
    "Islamic Education Online",
  ],

  authors: [{ name: "Awais Niaz " }],
  creator: "As Developers ",
  icons: {
    icon: "/images/logi.png",
  },
  openGraph: {
    title: "AL-Quran Teach || Online Academy",
    description:
      "Al-Quran Online Academy offers Quran learning courses with expert tutors. Learn Tajweed, Quran memorization, and Islamic studies online from anywhere in the world.",

    siteName: "Al-Quran Online",
    images: [
      {
        url: "/images/logi.png",
        width: 1200,
        height: 630,
        alt: "Al-Quran Online Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body cz-shortcut-listen="true"
//         className={`${geistSans.variable} ${geistMono.variable} antialiased `}
//       >
//         <CartProvider>
//           <Header />
//           <main>{children}</main>
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { CartProvider } from "./contexts/CartContext";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
