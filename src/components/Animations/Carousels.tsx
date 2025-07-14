import { motion } from "framer-motion";
import { Button } from "../UI/Button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CarouselCardProps } from "@/interfaces/ui";

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const CarouselCard = ({ cardsCarousel, onClick }: CarouselCardProps) => {
  const [relatedIndex, setRelatedIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 208; // 200 + 8px gap
        setVisibleCards(Math.floor(containerWidth / cardWidth));
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  return (
    <motion.div variants={itemVariants} className="mb-12" ref={containerRef}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Related Content</h2>
        <div className="flex gap-3">
          <Button
            onClick={() => setRelatedIndex(Math.max(0, relatedIndex - 1))}
            disabled={relatedIndex === 0}
            className="cursor-pointer rounded-full p-2 text-textPrimary-dark transition-all hover:bg-redPrimary disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <BiChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            onClick={() =>
              setRelatedIndex((prev) =>
                Math.min(prev + 1, cardsCarousel.length - visibleCards)
              )
            }
            className="cursor-pointer rounded-full p-2 text-textPrimary-dark transition-all hover:bg-redPrimary disabled:opacity-30 disabled:hover:bg-transparent"
            disabled={relatedIndex >= cardsCarousel.length - visibleCards}
          >
            <BiChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: -relatedIndex * 208 }} // 200px width + 8px gap
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {cardsCarousel.map((relatedItem) => (
            <motion.div
              key={relatedItem.id}
              className={`flex-shrink-0 w-48 p-2 cursor-pointer md:opacity-60 md:hover:opacity-100 ${
                relatedItem.id === cardsCarousel[relatedIndex].id
                  ? "md:opacity-100"
                  : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={onClick ? () => onClick(relatedItem.id) : undefined}
            >
              <div className={`relative h-64 rounded-lg overflow-hidden`}>
                <Image
                  src={relatedItem.image as string}
                  alt={relatedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{relatedItem.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
