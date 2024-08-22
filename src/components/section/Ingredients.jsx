import React from "react";
import Image from "next/image";

const Ingredients = () => {
  return (
    <div className="flex w-full h-screen p-20">
      <div className="flex flex-col justify-center w-1/2 gap-12 text-2xl">
        <div>
          <h3 className="mb-12 text-4xl">Ingrédients:</h3>
          <p>
            Eau, gaz carbonique, colorant : E150d, acidifiants : acide citrique,
            acide phosphorique et citrate de sodium, caféine, arôme naturel de
            cola et autres arômes naturels, édulcorants : aspartame et
            acésulfame K.
          </p>
        </div>
        <div>
          <h3 className="mb-12 text-4xl">
            Informations Nutritionnelles{" "}
            <span className="text-3xl">(pour 100ml)</span>
          </h3>
          <div className="flex gap-10">
            <div className="relative flex flex-col items-center gap-3 py-2 text-2xl text-center capitalize transition-colors duration-500 rounded-lg h-60 w-36 bg-mainColor text-secondColor">
              <div>
                <h4 className="h-16">energie</h4>
                <div className="relative">
                  <p className="absolute -translate-x-1/2 bottom-6 left-1/2 text-mainColor">
                    11 Kcal
                  </p>
                  <svg
                    className=" fill-secondColor"
                    version="1.1"
                    width="150px"
                    height="150px"
                    viewBox="0 0 264.564 264.564"
                  >
                    <g>
                      <path
                        d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773
                      c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-3 py-2 text-2xl text-center capitalize transition-colors duration-500 rounded-lg h-60 w-36 bg-mainColor text-secondColor">
              <div>
                <h4 className="h-16">matieres grasses</h4>
                <div className="relative">
                  <p className="absolute -translate-x-1/2 bottom-6 left-1/2 text-mainColor">
                    0.1 G
                  </p>
                  <svg
                    className=" fill-secondColor"
                    version="1.1"
                    width="150px"
                    height="150px"
                    viewBox="0 0 264.564 264.564"
                  >
                    <g>
                      <path
                        d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773
                      c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-3 py-2 text-2xl text-center capitalize transition-colors duration-500 rounded-lg h-60 w-36 bg-mainColor text-secondColor">
              <div>
                <h4 className="h-16">glucides</h4>
                <div className="relative">
                  <p className="absolute -translate-x-1/2 bottom-6 left-1/2 text-mainColor">
                    0.3 G
                  </p>
                  <svg
                    className=" fill-secondColor"
                    version="1.1"
                    width="150px"
                    height="150px"
                    viewBox="0 0 264.564 264.564"
                  >
                    <g>
                      <path
                        d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773
                      c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-3 py-2 text-2xl text-center capitalize transition-colors duration-500 rounded-lg h-60 w-36 bg-mainColor text-secondColor">
              <div>
                <h4 className="h-16">proteines</h4>
                <div className="relative">
                  <p className="absolute -translate-x-1/2 bottom-6 left-1/2 text-mainColor">
                    0.1 G
                  </p>
                  <svg
                    className=" fill-secondColor"
                    version="1.1"
                    width="150px"
                    height="150px"
                    viewBox="0 0 264.564 264.564"
                  >
                    <g>
                      <path
                        d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773
                      c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-3 py-2 text-2xl text-center capitalize transition-colors duration-500 rounded-lg h-60 w-36 bg-mainColor text-secondColor">
              <div>
                <h4 className="h-16">sel</h4>
                <div className="relative">
                  <p className="absolute -translate-x-1/2 bottom-6 left-1/2 text-mainColor">
                    0 G
                  </p>
                  <svg
                    className=" fill-secondColor"
                    version="1.1"
                    width="150px"
                    height="150px"
                    viewBox="0 0 264.564 264.564"
                  >
                    <g>
                      <path
                        d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773
                      c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-12 text-4xl">Format:</h3>
          <div className="flex gap-10">
            <Image
              src={"/image/formats/33cl-pet-126x300.png"}
              alt={"toto"}
              width={126}
              height={300}
              className="w-[84px] h-[200px]"
            />
            <Image
              src={"/image/formats/33cl-verre-126x300.png"}
              alt={"toto"}
              width={126}
              height={300}
              className="w-[84px] h-[200px]"
            />
            <Image
              src={"/image/formats/15l-pet-126x300.png"}
              alt={"toto"}
              width={126}
              height={300}
              className="w-[84px] h-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Ingredients;
