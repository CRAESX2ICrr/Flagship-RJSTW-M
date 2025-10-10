"use client";
import Image from "next/image";
import { useState } from "react";

export default function BrandsPage() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  // 📱 Constant phone image sources
  const phoneImages = {
    apple: "/images/brphones/iphone.png",
    samsung: "/images/brphones/galaxy.png",
  };

  // 🏷️ Constant brand pill data
  const brands = [
    { id: "apple", name: "Apple", logo: "/images/brands/apple.png", highlight: "iPhone", },
    { id: "samsung", name: "Samsung", logo: "/images/brands/samsung.png", highlight: "Galaxy", },
  ];

  return (
    <section className="flex flex-col gap-6 p-12 relative min-h-screen overflow-hidden">
      <div className="text-white text-center font-semibold text-2xl mb-4">
        Welcome to the Brands Page
      </div>

      {/* 🟢 Loop through all brands */}
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="group relative flex items-center gap-3 backdrop-blur-md bg-teal-400/10 border border-teal-300/20 text-white px-9 py-4 rounded-full w-fit mb-4 transition-all duration-500 ease-in-out hover:pr-140 overflow-hidden hover:shadow-lg hover:shadow-teal-500/20"
          onMouseEnter={() => setHoveredBrand(brand.id)}
          onMouseLeave={() => setHoveredBrand(null)}
        >
          {/* Left circular icon */}
          <div className="w-10 h-10 rounded-full bg-teal-300/20 flex items-center justify-center overflow-hidden backdrop-blur-sm">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={28}
              height={28}
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Brand name */}
          <span className="font-medium tracking-wide z-10">{brand.name}</span>

          {/* Hover overlay */}
          <div className="absolute top-0 bottom-0 -right-1 w-0 group-hover:w-[160px] bg-gradient-to-r from-teal-500/20 to-teal-700/30 backdrop-blur-md border-l border-teal-300/30 transition-all duration-500 ease-in-out rounded-l-[9999px] flex items-center justify-center overflow-hidden">
            <span className="opacity-0 group-hover:opacity-100 text-sm font-medium text-teal-50 transition-opacity duration-300 delay-200">
              {brand.highlight}
            </span>
          </div>
        </div>
      ))}

      {/* 📱 Fixed right image preview */}
      <div className="fixed top-0 bottom-0 right-0 w-[40vw] flex items-center justify-center pointer-events-none">
        {hoveredBrand && (
          <Image
            src={phoneImages[hoveredBrand]}
            alt="Phone preview"
            width={400}
            height={400}
            className="object-contain opacity-0 animate-fadeIn"
            unoptimized
          />
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
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
