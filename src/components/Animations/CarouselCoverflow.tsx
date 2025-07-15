"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CarouselCardProps } from "@/interfaces/ui";
import { Button } from "../UI/Button";

const CoverflowCarousel = ({ cardsCarousel, onClick }: CarouselCardProps) => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(cardsCarousel.length / 2)
  );

  const next = () => {
    setActiveIndex((prev) => Math.min(prev + 1, cardsCarousel.length - 1));
  };

  const prev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full relative flex flex-col space-y-4">
      <div className="flex items-stretch justify-between mb-6 border-b border-textPrimary/30 pb-5 dark:border-gray-600">
        <h2 className="text-2xl">Related Content</h2>
        <div className="flex gap-3 ">
          <Button
            onClick={prev}
            disabled={activeIndex === 0}
            className="cursor-pointer rounded-full p-2 text-redPrimary hover:text-textPrimary-dark transition-all hover:bg-redPrimary disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <BiChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            onClick={next}
            disabled={activeIndex === cardsCarousel.length - 1}
            className="cursor-pointer rounded-full p-2  text-redPrimary hover:text-textPrimary-dark transition-all hover:bg-redPrimary  disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <BiChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>

      <div className="relative h-[400px] w-full flex justify-center items-center overflow-hidden">
        {cardsCarousel.map((item, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          return (
            <motion.div
              key={item.id}
              className={`absolute w-[200px] h-[300px] rounded-xl overflow-hidden shadow-xl ${
                isActive ? "cursor-pointer" : ""
              }`}
              animate={{
                scale: isActive ? 1.1 : 0.8,
                opacity: isActive ? 1 : 0.5,
                x: offset * 170,
                rotateY: offset * -15,
                zIndex: 1000 - Math.abs(offset),
              }}
              whileHover={isActive ? { scale: 1.15 } : {}}
              transition={{ duration: 0.5 }}
              style={{ perspective: 1000 }}
              onClick={isActive && onClick ? () => onClick(item.id) : undefined}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black w-full h-full text-white p-2 text-xl flex items-end justify-center">
                  {item.title}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CoverflowCarousel;
