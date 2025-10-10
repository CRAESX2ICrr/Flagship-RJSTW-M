import React from "react";
import Image from "next/image";

export default function Feed() {
  const phones = [
    {
      id: 1, src: "/images/dash/one.jpg", alt: "Phone 1",
      className: "relative w-56 h-116 overflow-hidden rounded-[2rem] border-8 border-black/60 shadow-2xl bg-black",
    },
    {
      id: 2, src: "/images/dash/two.jpg", alt: "Phone 2",
      className: "relative w-60 h-[34rem] overflow-hidden rounded-xl border-[4px] border-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.8)] bg-black",
    },
    {
      id: 4, src: "/images/dash/three.jpg", alt: "Phone 4",
      className: "relative w-56 h-[30rem] overflow-hidden rounded-2xl border-[6px] border-gray-700 shadow-xl bg-black",
    },
  ];

  return (
    <section className="flex flex-nowrap justify-center items-end gap-10 mt-10 overflow-hidden">
    
    

      {/* Loop through the normal phones */}
      {phones.map((phone) => (
         <div key={phone.id} className={`${phone.className} shrink-0`}>
          <Image
            src={phone.src}
            alt={phone.alt}
            fill
            priority={false}
            className="object-cover"
          />
        </div>
      ))}

      {/* 📞 Special Flip Phone */}
        <div className="flex flex-col items-center gap-2 shrink-0">
        {/* 🔹 Top half */}
        <div className="relative w-56 h-[14rem] overflow-hidden rounded-t-[1.5rem] border-[6px] border-black/60 shadow-2xl bg-black">
          <Image
            src="/images/dash/three.jpg"
            alt="Flip Top"
            fill
            priority={false}
            className="object-cover object-top"
          />
        </div>

        {/* ⚫ Hinge */}
        <div className="w-40 h-3 bg-gray-800 rounded-full" />

        {/* 🔹 Bottom half */}
        <div className="relative w-56 h-[14rem] overflow-hidden rounded-b-[1.5rem] border-[6px] border-black/60 shadow-2xl bg-black">
          <Image
            src="/images/dash/three.jpg"
            alt="Flip Bottom"
            fill
            priority={false}
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
