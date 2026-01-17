import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomad Pays — Digital rewards platform",
  description: "Nomad Pays is a technology platform-aggregator for interaction between advertisers, users, and partners through a system of non-monetary bonus units (Points). The platform is NOT a bank or financial institution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}