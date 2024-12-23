import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import "./globals.css";

const audioWide = Audiowide({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Car Game Thing"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audioWide.className} antialiased mt-20`}
      >
        <div className="flex flex-col items-center gap-4">
          {children}
        </div>
      </body>
    </html>
  );
}
