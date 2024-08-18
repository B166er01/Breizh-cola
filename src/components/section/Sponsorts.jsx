"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const baskets = [
  {
    imgUrl: "/image/sponsorts/music/Au-pont-du-rock.png",
    linkUrl: "https://example.com/link1",
  },
  {
    imgUrl: "/image/sponsorts/music/AuBDM.png",
    linkUrl: "https://example.com/link2",
  },
  {
    imgUrl: "/image/sponsorts/music/Belle-ile-on-air.png",
    linkUrl: "https://example.com/link3",
  },
  {
    imgUrl: "/image/sponsorts/music/Bobital.png",
    linkUrl: "https://example.com/link4",
  },
  {
    imgUrl: "/image/sponsorts/music/Festival-chant-marin.png",
    linkUrl: "https://example.com/link5",
  },
  {
    imgUrl: "/image/sponsorts/music/festival-inter-celtique.png",
    linkUrl: "https://example.com/link6",
  },
  {
    imgUrl: "/image/sponsorts/music/Jazz-en-ville.png",
    linkUrl: "https://example.com/link7",
  },
  {
    imgUrl: "/image/sponsorts/music/Mlogo205X197-1.png",
    linkUrl: "https://example.com/link8",
  },
  {
    imgUrl: "/image/sponsorts/music/Motszik.png",
    linkUrl: "https://example.com/link9",
  },
  {
    imgUrl: "/image/sponsorts/music/Roi-Arthur.png",
    linkUrl: "https://example.com/link10",
  },
  {
    imgUrl: "/image/sponsorts/music/Roue-Waroch.png",
    linkUrl: "https://example.com/link11",
  },
  {
    imgUrl: "/image/sponsorts/music/Tombées-de-la-nuit.png",
    linkUrl: "https://example.com/link12",
  },
  {
    imgUrl: "/image/sponsorts/music/Vieilles-Charrue.png",
    linkUrl: "https://example.com/link11",
  },
];

const Sponsorts = () => {
  const centerRef = useRef(null);
  const armsRef = useRef([]);
  const numArms = baskets.length;

  useEffect(() => {
    // Create the Ferris wheel elements
    createFerrisWheel(numArms);

    // GSAP animation for the Ferris wheel rotation
    gsap.to(centerRef.current, {
      rotation: 360,
      duration: 45,
      ease: "linear",
      repeat: -1,
    });

    // GSAP animation for keeping baskets upright
    armsRef.current.forEach((basket) => {
      gsap.to(basket, {
        rotation: -360,
        duration: 45,
        ease: "linear",
        repeat: -1,
      });
    });
  }, []);

  const createFerrisWheel = (numArms) => {
    const space = 360 / numArms;
    for (let i = 0; i < numArms; i++) {
      const angle = i * space;
      const x = Math.cos((angle * Math.PI) / 180) * 340;
      const y = Math.sin((angle * Math.PI) / 180) * 340;

      // Get the image URL and link URL from the baskets array
      const basket = baskets[i];
      const basketImgUrl = basket.imgUrl;
      const basketLinkUrl = basket.linkUrl;

      // Create a div for each arm/basket
      const basketDiv = document.createElement("div");
      basketDiv.className =
        "absolute bg-center bg-cover border rounded-lg w-28 h-28";
      basketDiv.style.backgroundImage = `url(${basketImgUrl})`;
      basketDiv.style.transform = `translate(${x}px, ${y}px)`;

      // Create a Link element
      const linkElement = document.createElement("a");
      linkElement.href = basketLinkUrl;
      linkElement.appendChild(basketDiv);
      centerRef.current.appendChild(linkElement);

      armsRef.current.push(basketDiv);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div
        ref={centerRef}
        className="absolute flex items-center justify-center w-[600px] h-[600px] text-7xl font-poppins uppercase text-secondColor text-stroke text-stroke-mainColor"
      >
        music
      </div>
      <div
        ref={centerRef}
        className="absolute flex items-center justify-center w-[600px] h-[600px]"
      />
    </div>
  );
};

export default Sponsorts;
