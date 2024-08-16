"use client";

// import Footer from "@/components/Footer";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "../components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ThemeChanger />
      <main
        className={`bg-secondColor text-mainColor  ${theme} transition-colors duration-500 min-h-[3500px]`}
      >
        <div className="uppercase w-full h-screen  flex flex-col items-center justify-center text-8xl ">
          home
        </div>
      </main>
    </>
  );
}
