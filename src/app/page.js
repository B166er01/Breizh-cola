"use client";

// import Footer from "@/components/Footer";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "../components/ThemeProvider";
import AnimateOut from "@/components/AnimateOut";
import Screen from "@/components/section/Screen";
import ProductOriginal from "@/components/section/ProductOriginal";
import Test from "@/components/section/Test";
import Marquee from "@/components/Marquee";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ThemeChanger />
      <AnimateOut />
      <main
        className={`bg-secondColor text-mainColor  ${theme} transition-colors duration-500 min-h-[3500px]`}
      >
        <div className="flex flex-col items-center justify-center w-full h-screen uppercase text-8xl ">
          home
        </div>
        <Screen />
        <Marquee />
        <ProductOriginal />
        {/* <Marquee /> */}

        <Test />
        {/* <Screen /> */}
      </main>
    </>
  );
}
