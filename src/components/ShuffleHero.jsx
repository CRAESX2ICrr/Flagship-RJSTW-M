"use client";

import Shuffle from "@/components/Shuffle";

export default function ShuffleHero() {
  return (
    <section
      className="
        min-h-[30vh]
        flex flex-col 
        items-start        /* push LEFT */
        justify-start
        pt-70              /* push DOWN */
        pl-100               /* additional left padding */
        gap-3 
      "
    >
      {/* Animated Title */}
      <Shuffle
        text="WELCOME"
        loop={true}
        loopDelay={0.8}
        shuffleDirection="right"
        duration={0.35}
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
        style={{ fontSize: "3rem", lineHeight: "1" }}
        colorFrom="#dadadaff"
        colorTo="#484848ff"
      />

      <p className="text-gray-400 text-lg tracking-wide">
        FlagShip by Clayton
      </p>
    </section>
  );
}
