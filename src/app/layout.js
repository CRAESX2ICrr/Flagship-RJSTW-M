import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ColorBends from "@/components/ColorBends";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flagship Sail",
  description: "Display the latest flagship phones from various brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden min-h-screen`}
      >
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <ColorBends
            colors={["#ff5c7a", "#00f8f4ff", "#00ffd1"]}
            rotation={150}
            speed={0.3}
            scale={1.5}
            frequency={1.5}
            warpStrength={1.2}
            mouseInfluence={1.0}
            parallax={0.8}
            noise={0.0}
            transparent={false}
          />
        </div>

        <Header />

        <div className="relative pt-24 text-gray-100">
          {children}
        </div>
      </body>

    </html>
  );
}
