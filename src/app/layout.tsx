import type { Metadata } from "next";
import '../assets/fonts/fonts.css'
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexander Pisanko",
  description: "The developer you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
