"use client";

// import Footer from "@/components/Footer";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "../components/ThemeProvider";
import AnimateOut from "@/components/AnimateOut";
import Screen from "@/components/section/Screen";
import ProductOriginal from "@/components/section/ProductOriginal";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ThemeChanger />
      <AnimateOut />
      <main
        className={`bg-secondColor text-mainColor  ${theme} transition-colors duration-500 min-h-[3500px]`}
      >
        <div className="uppercase w-full h-screen  flex flex-col items-center justify-center text-8xl ">
          home
        </div>
        <Screen />
        <ProductOriginal />
      </main>
    </>
  );
}
