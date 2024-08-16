"use client";
// app/TotoContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext(undefined);

// Custom hook to use the TotoContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useToto must be used within a TotoProvider");
  }
  return context;
};

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(""); // State to hold the value

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
