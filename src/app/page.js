"use client";

// import Footer from "@/components/Footer";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "../components/ThemeProvider";
import AnimateOut from "@/components/AnimateOut";
import Screen from "@/components/section/Screen";
import ProductOriginal from "@/components/section/ProductOriginal";
import Test from "@/components/section/Test";
import Marquee from "@/components/Marquee";
import Sponsorts2 from "@/components/section/Sponsorts2";
import Landing from "@/components/section/Landing";
import Gallery from "@/components/section/Gallery";
import SkewScroll from "@/components/section/SkewScroll";
import Infos from "@/components/section/Infos";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ThemeChanger />
      <AnimateOut />
      <main
        className={`bg-secondColor text-mainColor  ${theme} transition-colors duration-500`}
      >
        <Landing />

        <Gallery />
        <Marquee />
        <Screen />
      </main>
    </>
  );
}
