"use client";
import { Button } from "@/components/UI/Button";
import useDataMarvelDetails from "@/hooks/useDataMarvelDetails";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { Spiner, SpinerImg } from "@/components/UI/Spiner";
import { formatoDeFechaYHora } from "@/utils/date";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { useFavorites } from "@/context/favoritesContext";
import { CarouselCard, itemVariants } from "@/components/Animations/Carousels";
import CoverflowCarousel from "@/components/Animations/CarouselCoverflow";

const DetailsSection = ({ id }: { id: string }) => {
  const [isLoadingImg, setIsLoadingImg] = React.useState(true);
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { isError, isLoading, data } = useDataMarvelDetails(
    section as string,
    id
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="w-full mt-32 flex flex-col text-2xl items-center justify-center">
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <Spiner />
        </div>
      )}
      {isError && <p>Error</p>}
      {data &&
        data.map((item) => (
          <motion.div
            key={item.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 py-8"
          >
            <motion.div
              variants={containerVariants}
              className="absolute inset-0 -z-20 w-full h-screen brightness-[0.2]"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <motion.div
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-8 mb-12"
            >
              <motion.div variants={itemVariants} className="relative">
                <Link
                  href={`/?section=${section}`}
                  className="text-secondaryWhite font-bold flex items-center mx-auto mb-4 hover:underline gap-3 text-lg"
                >
                  <FaArrowLeft className="h-4 w-4" />
                  Go Back
                </Link>
                <div className="relative h-[480px] rounded-lg overflow-hidden">
                  {isLoadingImg && <SpinerImg />}
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain"
                    onLoad={() => setIsLoadingImg(false)}
                  />
                </div>
              </motion.div>
              <div className="space-y-6 mt-10">
                <div className="text-sm lg:text-secondaryWhite uppercase tracking-wide">
                  {item.category} -{" "}
                  {formatoDeFechaYHora(new Date(item.modified))}
                </div>
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl lg:text-secondaryWhite lg:text-6xl font-bold leading-tight"
                >
                  {item.name}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg lg:text-secondaryWhite/70 leading-relaxed"
                >
                  {item.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4">
                  <Link href={item.detailUrl || ""} target="_blank">
                    <Button className="bg-yellow-500 hover:scale-105 transition-all hover:bg-yellow-600 text-black font-bold px-8 py-3">
                      READ NOW
                    </Button>
                  </Link>
                </motion.div>

                {/* Stats/Info */}
                <motion.div variants={itemVariants} className="flex gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      onClick={() => toggleFavorite(item)}
                      className={`${
                        isFavorite(item.id)
                          ? "bg-redPrimary"
                          : "bg-background-dark"
                      } cursor-pointer rounded-full p-2 text-textPrimary-dark hover:bg-redPrimary`}
                    >
                      <FaHeart className="h-5 w-5" />
                    </Button>
                    <span className="lg:text-secondaryWhite/80">
                      Add to Favorites
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <FaShareAlt className="h-5 w-5 text-blue-500" />
                    <span>Share</span>
                  </div> */}
                </motion.div>
              </div>
            </motion.div>

            {"characters" in item &&
              Array.isArray(item.characters) &&
              item.characters.length > 0 && (
                <div className="mt-20">
                  <h2 className="text-3xl font-bold">Characters</h2>
                  <CarouselCard
                    cardsCarousel={item.characters.map((c) => ({
                      id: String(c.id),
                      title: c.name,
                      image: c.img,
                    }))}
                    onClick={(id) => {
                      router.push(`${id}?section=characters`);
                    }}
                  />
                </div>
              )}
            {"comics" in item &&
              Array.isArray(item.comics) &&
              item.comics.length > 0 && (
                <div className={`my-32`}>
                  <h2 className={`text-3xl font-bold`}>Comics</h2>
                  <div
                    className={`${
                      section !== "characters" &&
                      "flex flex-col items-center space-y-5"
                    }`}
                  >
                    {section === "characters" ? (
                      <CarouselCard
                        cardsCarousel={item.comics.map((c) => ({
                          id: String(c.id),
                          title: c.name,
                          image: c.img,
                        }))}
                        onClick={(id) => {
                          router.push(`${id}?section=comics`);
                        }}
                      />
                    ) : (
                      <CoverflowCarousel
                        cardsCarousel={item.comics.map((c) => ({
                          id: String(c.id),
                          title: c.name,
                          image: c.img,
                        }))}
                        onClick={(id) => {
                          router.push(`${id}?section=comics`);
                        }}
                      />
                    )}
                    <Link
                      href={
                        item.comicsUrl || item.detailUrl || item.wikiUrl || ""
                      }
                      target="_blank"
                    >
                      <Button
                        type="button"
                        className="p-2 font-semibold bg-redPrimary dark:bg-redPrimary-dark text-secondaryWhite "
                      >
                        Read more comics
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            {"series" in item &&
              Array.isArray(item.series) &&
              item.series.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-3xl font-bold">Series</h2>
                  <CoverflowCarousel
                    cardsCarousel={item.series.map((s) => ({
                      id: String(s.id),
                      title: s.name,
                      image: s.img,
                    }))}
                    onClick={(id) => {
                      router.push(`${id}?section=series`);
                    }}
                  />
                </div>
              )}
          </motion.div>
        ))}
    </main>
  );
};

export default DetailsSection;
