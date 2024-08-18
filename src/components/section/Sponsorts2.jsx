"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sportSponsort = [
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

const Sponsorts2 = () => {
  const linksRef = useRef([]);

  //   useGSAP(() => {
  //     linksRef.current.forEach((link, i) => {
  //       gsap.to(link, {
  //         scale: 1,
  //         ease: "back.out",
  //         scrollTrigger: {
  //           trigger: "#tyty",
  //           start: "top 20%", // When the link reaches 70% of the viewport height
  //           markers: true,
  //         },
  //       });
  //     });
  //   }, []);
  return (
    <div className="flex flex-col items-center w-full min-h-screen ">
      <div className="w-1/2 text-5xl text-center capitalize bg-green-500 font-poppins">
        {" "}
        <h3>sports</h3>
        <div
          className="flex flex-wrap gap-6 m-2 scale-0 bg-green-100"
          id="tyty"
        >
          {sportSponsort.map((s, i) => (
            <Link
              key={i}
              href={s.linkUrl}
              className="w-[200px] h-[200px] scale-0"
              ref={(el) => (linksRef.current[i] = el)}
            >
              <Image
                src={s.imgUrl}
                alt="x"
                width={200}
                height={200}
                loyout="responsive"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/2 text-5xl text-center capitalize bg-yellow-500 font-poppins">
        {" "}
        music
      </div>
    </div>
  );
};

export default Sponsorts2;
