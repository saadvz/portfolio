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
  title: "Saad Khan | Founding Engineer & Technical Product Engineer",
  description: "Portfolio of Saad Khan - Founding Engineer at VERA, former Verizon Product Engineer, and MS Computer Science student at Georgia Tech. Building AI voice agents, MCP tools, and SaaS products.",
  keywords: ["Founding Engineer", "Product Engineer", "AI Agents", "Voice AI", "MCP", "React", "Next.js", "TypeScript", "Georgia Tech", "VERA", "Verizon"],
  authors: [{ name: "Saad Khan" }],
  openGraph: {
    title: "Saad Khan | Founding Engineer & Technical Product Engineer",
    description: "Portfolio of Saad Khan - Building AI voice agents, MCP tools, and SaaS products.",
    type: "website",
    images: [
      {
        url: "/portfolio_sketch.png",
        width: 1200,
        height: 630,
        alt: "Saad Khan - Founding Engineer & Technical Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Khan | Founding Engineer & Technical Product Engineer",
    description: "Portfolio of Saad Khan - Building AI voice agents, MCP tools, and SaaS products.",
    images: ["/portfolio_sketch.png"],
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
