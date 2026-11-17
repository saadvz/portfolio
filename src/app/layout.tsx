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
  title: "Saad Khan | Product Innovation Engineer",
  description: "Portfolio of Saad Khan - Product Innovation Engineer focused on AI prototyping and agentic workflows. Former Founding Engineer at Threshold Care (VERA) and Verizon Product Engineer; MS Computer Science at Georgia Tech.",
  keywords: ["Product Innovation Engineer", "Founding Engineer", "Agentic Workflows", "AI Agents", "Voice AI", "MCP", "React", "Next.js", "TypeScript", "Georgia Tech", "Threshold Care", "VERA", "Verizon"],
  authors: [{ name: "Saad Khan" }],
  openGraph: {
    title: "Saad Khan | Product Innovation Engineer",
    description: "Portfolio of Saad Khan - Building AI voice agents, MCP tools, and SaaS products.",
    type: "website",
    images: [
      {
        url: "/portfolio_sketch.png",
        width: 1200,
        height: 630,
        alt: "Saad Khan - Product Innovation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Khan | Product Innovation Engineer",
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
