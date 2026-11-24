import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimizely - AI to create and optimize digital experiences",
  description:
    "Everything marketing and digital teams need to create content fast, test and personalize, and prove business impact.",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-dpl-id="dpl_Cx8SzetKd12qXHXj9VCU1jC1vVq3"
      data-scroll-behavior="smooth"
      className="antialiased"
    >
      <head>
        <link rel="stylesheet" href="/css/05y-k5m0r6874.css" data-precedence="next" />
        <link rel="stylesheet" href="/css/3ph33ndovq8k2.css" data-precedence="next" />
        <link rel="stylesheet" href="/css/018hda837i4r9.css" data-precedence="next" />
        <link rel="stylesheet" href="/css/3awhc024hyrdz.css" data-precedence="next" />
        <link
          rel="preload"
          href="/fonts/HenriettaCondensed-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NudgeSemiNormal-SemiNormalExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/die-grotesk-b-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/die-grotesk-b-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/material-symbols-rounded-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
