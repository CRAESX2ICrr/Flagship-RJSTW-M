"use client";

import Shuffle from "@/components/Shuffle";
import Feed from "@/components/CardHero";

export default function ShuffleHero() {
  return (
    <section
      className="
        min-h-[70vh]
        flex
        flex-row
        items-center
        justify-between
        pl-100 
        pt-24 pr-0
      "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-3"> 
        <Shuffle text="WELCOME" loop={true} loopDelay={0.8} 
        shuffleDirection="right" duration={0.35} 
        animationMode="evenodd" 
        shuffleTimes={1} 
        ease="power3.out" 
        stagger={0.03} 
        threshold={0} 
        rootMargin="0px" 
        triggerOnce={false} 
        triggerOnHover={false} 
        respectReducedMotion={true} 
        className="font-extrabold" 
        style={{ fontSize: "64px", lineHeight: "1" }} 
        colorFrom="#dadadaff" colorTo="#484848ff" />

        <p className="text-gray-400 text-lg tracking-wide">
          FlagShip by Clayton
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center">
        <Feed />
      </div>
    </section>
  );
}
