import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-clash",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Saad Khan | Software Engineer & Product Innovator",
  description: "Portfolio of Saad Khan - Software Engineer, Product Innovator, and MS Analytics student at Georgia Tech. Building innovative solutions at the intersection of technology and business.",
  keywords: ["Software Engineer", "Product Engineer", "React", "Next.js", "TypeScript", "Georgia Tech", "Verizon"],
  authors: [{ name: "Saad Khan" }],
  openGraph: {
    title: "Saad Khan | Software Engineer & Product Innovator",
    description: "Portfolio of Saad Khan - Building innovative solutions at the intersection of technology and business.",
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
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
