"use client";

import React, { useState, useEffect } from "react";
import AnimateOut from "@/components/AnimateOut";
import ProductTitle from "@/components/ProductTittle";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "@/components/ThemeProvider";
import Ingredients from "@/components/section/Ingredients";
import Marquee from "@/components/Marquee";
import ProductDescription from "@/components/section/ProductDescription";
import SkewScroll from "@/components/section/SkewScroll";

// Mapping slug to component import
const componentMapping = {
  original: () => import("@/components/experience/views/BreizhOriginal"),
  cherry: () => import("@/components/experience/views/BreizhOriginal"),

  // Add more mappings here for other slugs
};

const products = [
  {
    name: "original",
    color: "#123456",
    description:
      "La recette originale, créée en 2002. Son secret ? Un dosage parfait des ingrédients, lui donnant de fines bulles. Un gout plébiscité par les consommateurs depuis 20 ans !",
    ingredients:
      "Eau, gaz carbonique, colorant : E150d, acidifiants : acide citrique, acide phosphorique et citrate de sodium, caféine, arôme naturel de cola et autres arômes naturels, édulcorants : aspartame et acésulfame K.",
    nutritionel: {
      energie: 11,
      graisses: 0.1,
      glucides: 0.3,
      proteines: 0.1,
      sel: 0,
    },
    format: ["33b", "33g", "150b"],
  },
  // Add more products here...
  {
    name: "cherry",
    color: "#fef2f2",
    description:
      "Plus de 20 ans après la création du 1er cola régional de France, notre équipe d'irréductibles bretons s'est mise en tête de lancer LE cola qui manquait à notre gamme : Breizh Cola saveur cerise.",
    ingredients:
      "Eau, gaz carbonique, colorant : E150d, acidifiants : acide citrique, acide phosphorique et citrate de sodium, caféine, arôme naturel de cola et autres arômes naturels, édulcorants : aspartame et acésulfame K.",
    nutritionel: {
      energie: 11,
      graisses: 0.1,
      glucides: 0.3,
      proteines: 0.1,
      sel: 0,
    },
    format: ["33b", "33g", "150b"],
  },
];

const Page = ({ params }) => {
  const { theme } = useTheme();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ProductComponent, setProductComponent] = useState(null);

  useEffect(() => {
    // Find the product that matches the params.slug
    const product = products.find((p) => p.name === params.slug);
    setSelectedProduct(product);

    // Dynamically import the corresponding component
    if (product && componentMapping[params.slug]) {
      componentMapping[params.slug]()
        .then((mod) => setProductComponent(() => mod.default))
        .catch(() => setProductComponent(null));
    }
  }, [params.slug]);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* <ThemeChanger /> */}
      <AnimateOut />
      <div
        className={`bg-secondColor ${theme} transition-colors duration-500 min-h-[200vh] w-full`}
      >
        <div id="single" className="w-full min-h-[200vh]">
          <ProductTitle name={selectedProduct.name} />
          {ProductComponent && <ProductComponent />}
          <ProductDescription description={selectedProduct.description} />
          <Marquee />
          <Ingredients
            ingredients={selectedProduct.ingredients}
            nutritionel={selectedProduct.nutritionel}
            formats={selectedProduct.format}
          />
          <SkewScroll />
        </div>
      </div>
    </>
  );
};

export default Page;
