import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing — Design Studio",
  description: "A design studio building distinctive digital products for forward-thinking brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
