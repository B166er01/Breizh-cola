"use client";

import { useTheme } from "../components/ThemeProvider";
import ThemeChanger from "@/components/ThemeChanger";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ThemeChanger />
      <main
        className={`bg-skin-fill text-skin-base  ${theme} transition-colors duration-700 min-h-[3500px]`}
      ></main>
    </>
  );
}
