"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { FaHeart } from "react-icons/fa6";
import { SpinerImg } from "./Spiner";
import { ICardsProps } from "@/interfaces/ui";

export const CardsComponent = ({
  title,
  description,
  img,
  favorites,
  toggleFavorite,
}: ICardsProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md ">
      <div className="relative">
        {isLoading && <SpinerImg />}
        <Image
          src={img}
          alt="Spider-Man Logo"
          priority={true}
          unoptimized={true}
          onLoad={() => setIsLoading(false)}
          width={1000}
          height={1000}
          className="w-full aspect-square object-cover transition-all duration-300 md:group-hover:blur-[1px] "
        />
      </div>

      {favorites && (
        <Button className="hidden md:block rounded-full group-hover:opacity-0 absolute top-2 right-2 p-2 text-textPrimary-dark bg-redPrimary">
          <FaHeart className="h-5 w-5" />
        </Button>
      )}

      <div className="hidden absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-secondaryBlack/20 to-black text-white p-4 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 md:flex flex-col justify-end gap-2 z-10">
        <p className="text-xl font-bold anton-sc-regular">{title}</p>

        <p className="text-sm">
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>

        <div className="flex justify-between items-center">
          <Button
            onClick={() => toggleFavorite()}
            className={`${
              favorites ? "bg-redPrimary" : "bg-background-dark"
            } cursor-pointer rounded-full p-2 text-textPrimary-dark  translation-all duration-200 hover:scale-110 hover:bg-redPrimary`}
          >
            <FaHeart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between md:hidden space-y-3">
        <p className="text-base  font-bold">{title}</p>
        <p className="text-sm">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>

        <div className="flex justify-between items-center">
          <Button
            className={`rounded-full p-2   ${
              favorites
                ? "text-textPrimary-dark bg-redPrimary"
                : "text-textPrimary-dark bg-background-dark"
            }`}
            onClick={() => toggleFavorite()}
          >
            <FaHeart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
