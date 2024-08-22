import React from "react";
import Image from "next/image";
import ProductFormats from "../ProductFormats";
import Nutritionel from "../Nutritionel";

const Ingredients = ({ ingredients, nutritionel, formats }) => {
  return (
    <div className="flex w-full h-screen p-20">
      <div className="flex flex-col justify-center w-1/2 gap-12 text-xl">
        <div>
          <h3 className="mb-12 text-4xl">Ingrédients:</h3>
          <p>{ingredients}</p>
        </div>
        <Nutritionel nutritionel={nutritionel} />
        <ProductFormats formats={formats} />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Ingredients;
