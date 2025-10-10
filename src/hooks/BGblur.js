import { useEffect } from "react";

/**
 * Custom hook: Blurs the <main> background and locks body scroll when active
 * @param {boolean} isActive - Whether to apply the blur
 * @param {number} blurAmount - Optional blur intensity (default: 6px)
 */
export default function useBGblur(isActive, blurAmount = 6) {
  useEffect(() => {
    const main = document.querySelector("main");

    if (isActive) {
      document.body.style.overflow = "hidden";
      if (main) {
        main.style.transition = "filter 200ms ease";
        main.style.filter = `blur(${blurAmount}px)`;
      }
    } 
    
    else {
      document.body.style.overflow = "unset";
      if (main) main.style.filter = "";
    }

    return () => {
      document.body.style.overflow = "unset";
      if (main) main.style.filter = "";
    };
  }, [isActive, blurAmount]);
}
