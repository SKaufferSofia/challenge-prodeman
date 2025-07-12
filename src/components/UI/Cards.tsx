"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { FaHeart } from "react-icons/fa6";
import { SpinerImg } from "./Spiner";
import { ICardsProps } from "@/interfaces/ui";
import { motion } from "framer-motion";
import Link from "next/link";

export const CardsComponent = ({
  id,
  title,
  description,
  img,
  favorites,
  category,
  toggleFavorite,
}: ICardsProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
    >
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:block rounded-full group-hover:opacity-0 absolute bottom-4 left-4 p-2 text-textPrimary-dark bg-redPrimary"
        >
          <FaHeart className="h-5 w-5" />
        </motion.div>
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
            type="button"
            onClick={() => toggleFavorite()}
            className={`${
              favorites ? "bg-redPrimary" : "bg-background-dark"
            } cursor-pointer rounded-full p-2 text-textPrimary-dark hover:bg-redPrimary`}
          >
            <FaHeart className="h-5 w-5" />
          </Button>
          <Link href={{ pathname: `/${id}`, query: { section: category } }}>
            <Button
              type="button"
              className=" p-2 font-semibold hover:bg-redPrimary hover:dark:bg-redPrimary-dark text-secondaryWhite "
            >
              See more
            </Button>
          </Link>
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
    </motion.div>
  );
};
