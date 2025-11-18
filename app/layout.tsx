import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amer Kovacevic - Platform Engineer II Portfolio",
  description: "Portfolio of a Platform Engineer II showcasing projects, technologies, and expertise",
  icons: {
    icon: '/assets/aklogo.png',
    shortcut: '/assets/aklogo.png',
    apple: '/assets/aklogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

