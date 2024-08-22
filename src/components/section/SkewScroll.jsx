"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const SkewScroll = () => {
  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skew-container", "skewY", "deg"),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set(".col", { transformOrigin: "right center", force3D: true });
  }, []);

  return (
    <div className="flex justify-center w-full h-screen gap-72 py-14">
      <div className="flex flex-col gap-32">
        <div className="skew-container w-[300px] h-[413px] col">
          <Image
            src="/image/BC-2015.jpg"
            alt=""
            width={300}
            height={413}
            // layout="responsive"
          />
        </div>
        <div className="mt-4 skew-container w-[300px] h-[413px] col">
          <Image
            src="/image/789bc505ed232403720377a93f599021.jpg"
            alt=""
            width={300}
            height={413}
            // layout="responsive"
          />
        </div>
      </div>

      <div className="flex flex-col gap-32">
        <div className="skew-container w-[300px] h-[413px] col">
          <Image
            src="/image/campagne-bc-breizh-ile.jpg"
            alt=""
            width={300}
            height={413}
            // layout="responsive"
          />
        </div>
        <div className="mt-4 skew-container w-[300px] h-[413px] col">
          <Image
            src="/image/66753631.jpg"
            alt=""
            width={300}
            height={413}
            // layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default SkewScroll;
