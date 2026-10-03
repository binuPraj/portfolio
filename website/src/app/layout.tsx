import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Binu Prajapati — AI/ML & Full-Stack Developer",
  description: "Portfolio of Binu Prajapati — a final-year Computer Engineering student specializing in AI/ML systems and full-stack web development. Built with React, Next.js, Python, and Django.",
  keywords: ["Binu Prajapati", "AI/ML Developer", "Full-Stack Developer", "Computer Engineering", "Nepal", "React", "Django", "Python"],
  authors: [{ name: "Binu Prajapati" }],
  creator: "Binu Prajapati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7SCQGY15ER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7SCQGY15ER');
          `}
        </Script>
      </body>
    </html>
  );
}
