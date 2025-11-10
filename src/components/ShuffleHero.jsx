"use client";

import Shuffle from "@/components/Shuffle";

export default function ShuffleHero() {
  return (
    <section
      className="
        min-h-[30vh]
        flex flex-col items-center justify-start
        pt-12
        text-center gap-4 px-4
      "
    >
      {/* Main title */}
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
        threshold={0.1}
        triggerOnce={false}
        triggerOnHover={false}
        respectReducedMotion={true}
        className="font-extrabold"
        style={{ fontSize: "3rem", lineHeight: "1" }}

        /* ✅ Force correct colors */
        colorFrom="#dadadaff"   /* gray-400 */
        colorTo="#484848ff"
      />

      {/* Subtitle */}
      <Shuffle
        text="SCROLL BELOW"
        loop={true}
        loopDelay={0.8}
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={false}
        triggerOnHover={false}
        respectReducedMotion={true}
        className=""
        style={{ fontSize: "1.25rem" }}

        /* ✅ Force correct colors */
        colorFrom="#6b7280"   /* gray-500 */
        colorTo="#6b7280"
      />

    </section>
  );
}
