"use client";
import Image from "next/image";
import { useState } from "react";

export default function BrandsPage() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

// Constant phone image sources
const phoneImages = {
  apple: "/images/brphones/iphone.png",
  samsung: "/images/brphones/galaxy.png",
  google: "/images/brphones/pixel.png",
  oneplus: "/images/brphones/onephone.png",
  asus: "/images/brphones/rogphone.png",
  xiaomi: "/images/brphones/miphone.png",
  vivo: "/images/brphones/viphone.png",
  oppo: "/images/brphones/findx.png",
  motorola: "/images/brphones/razr.png",
  realme: "/images/brphones/gtseries.png",
  iqoo: "/images/brphones/neo.png",
};

  
// Constant brand pill data
const brands = [
  { id: "apple", name: "Apple", logo: "/images/brands/apple.png", highlight: "iPhone" },
  { id: "samsung", name: "Samsung", logo: "/images/brands/samsung.png", highlight: "Galaxy" },
  { id: "google", name: "Google", logo: "/images/brands/google.png", highlight: "Pixel" },
  { id: "oneplus", name: "OnePlus", logo: "/images/brands/oneplus.png", highlight: "13" },
  { id: "asus", name: "ASUS", logo: "/images/brands/asus.png", highlight: "ROG Phone" },
  { id: "xiaomi", name: "Xiaomi", logo: "/images/brands/xiaomi.png", highlight: "Mi Series" },
  { id: "vivo", name: "Vivo", logo: "/images/brands/vivo.png", highlight: "V Series" },
  { id: "oppo", name: "Oppo", logo: "/images/brands/oppo.png", highlight: "Find X" },
  { id: "motorola", name: "Motorola", logo: "/images/brands/motorola.png", highlight: "RAZR" },
  { id: "realme", name: "Realme", logo: "/images/brands/realme.png", highlight: "GT Series" },
  { id: "iqoo", name: "iQOO", logo: "/images/brands/iqoo.png", highlight: "Neo" },
];


  return (
    <section className="flex flex-col gap-6 p-12 relative min-h-screen overflow-hidden w-full">
      
  <div className="w-full max-w-3xl ml-60">
        <div className="text-white text-left font-semibold text-2xl mb-4">
          Welcome to the Brands Page
        </div>

        {/* Grid of brand cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onMouseEnter={() => setHoveredBrand(brand.id)}
            onMouseLeave={() => setHoveredBrand(null)}
            className="group relative flex flex-col items-center text-center gap-3 bg-white/3 border border-white/6 text-white px-6 py-6 rounded-2xl w-full transition-transform duration-200 ease-out hover:scale-105 hover:shadow-lg"
            aria-label={`${brand.name} ${brand.highlight}`}
          >
            {/* Logo */}
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={40}
                height={40}
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Brand name */}
            <span className="mt-2 text-lg font-semibold z-10">{brand.name}</span>

            {/* Phone model / highlight */}
            <span className="text-sm text-gray-300 mt-1">{brand.highlight}</span>
          </button>
        ))}
        </div>
      </div>

      {/* 📱 Fixed right image preview (shows when hovered) */}
      <div className="fixed top-0 bottom-0 right-0 w-[40vw] flex items-center justify-center pointer-events-none px-6">
        {hoveredBrand && (
          <div className="max-w-[420px] max-h-[80vh] w-full flex items-center justify-center">
            <Image
              src={phoneImages[hoveredBrand]}
              alt="Phone preview"
              width={420}
              height={420}
              className="object-contain animate-fadeIn"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* 🌀 Inline Tailwind animation definition */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(.2,.9,.2,1) forwards;
        }
      `}</style>
    </section>
  );
}
