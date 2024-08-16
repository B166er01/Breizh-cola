"use client";
import gsap from "gsap";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const AnimatedLink = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const animate = () => {
    // Prevent the animation and navigation if the target is the current page
    if (href === pathname) {
      return;
    }

    let TL = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    TL.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
      top: "0",
      duration: 0.44, // Adjust the duration as needed
      stagger: 0.12,
      // onComplete: () => {
      //   // Optional: Reverse the animation after navigation
      //   gsap.to(
      //     ["#transition", "#transition2", "#transition3", "#transition4"],
      //     {
      //       top: "-100%",
      //       duration: 0.54, // Adjust the duration as needed
      //       delay: 0.22,
      //       stagger: 0.15,
      //     }
      //   );
      // },
    });
  };

  return (
    <div className="cursor-pointer" onClick={animate}>
      {children}
    </div>
  );
};

export default AnimatedLink;
