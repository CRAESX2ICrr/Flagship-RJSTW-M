"use client";

import React from "react";
import Image from "next/image";

/**
 * Articles - refined glassmorphic 3-card section (no grey background)
 */
export default function Articles({ items }) {
  const defaults = [
    {
      src: "/images/dash/one.jpg",
      alt: "Phone 1",
      title: "Sleek flagship",
      description:
        "A compact powerhouse with great battery life and a crisp display.",
    },
    {
      src: "/images/dash/two.jpg",
      alt: "Phone 2",
      title: "Studio-grade camera",
      description:
        "Capture stunning low-light photos with advanced image processing.",
    },
    {
      src: "/images/dash/three.jpg",
      alt: "Phone 3",
      title: "Foldable design",
      description:
        "A flexible hinge and premium materials deliver a unique user experience.",
    },
  ];

  const list = Array.isArray(items) && items.length ? items : defaults;

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((it, i) => (
            <article
              key={i}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/20 bg-white/10
                backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                p-5 flex flex-col gap-4
                transition-all duration-300 ease-out
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                hover:scale-[1.03]
              "
            >
              {/* Image */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                <Image
                  src={it.src}
                  alt={it.alt || it.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-gray-200/90 leading-relaxed">
                  {it.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
