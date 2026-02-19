import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CACCOU Family Services | Home Care in Harlow, Essex",
  description:
    "CACCOU Family Services (Care Genius) is a CQC-registered home care provider in Harlow, Essex. We offer personal care, dementia support, and companionship for adults of all ages.",
  keywords: [
    "home care Harlow",
    "care agency Essex",
    "domiciliary care Harlow",
    "dementia care Essex",
    "CQC registered care provider",
    "CACCOU family services",
    "Care Genius Harlow",
    "personal care Harlow",
  ],
  openGraph: {
    title: "CACCOU Family Services | Home Care in Harlow",
    description: "Compassionate, CQC-registered home care in Harlow, Essex.",
    url: "https://www.caccou.co.uk",
    siteName: "CACCOU Family Services",
    images: [{ url: "/logo.png", width: 600, height: 300 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CACCOU Family Services",
    description: "Supporting Families into a Better Future — Harlow, Essex",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.caccou.co.uk" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
