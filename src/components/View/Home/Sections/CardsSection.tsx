"use client";
import { Button } from "@/components/UI/Button";
import { CardsComponent } from "@/components/UI/Cards";
import { getMarvel } from "@/lib/marvel";
import React, { useEffect } from "react";

interface IThumbnail {
  path: string;
  extension: string;
}

interface IBaseMarvel {
  id: number;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
}

interface ICharacter extends IBaseMarvel {
  name: string;
  description: string;
}

interface IComic extends IBaseMarvel {
  title: string;
  description: string;
}

interface IEvent extends IBaseMarvel {
  title: string;
  description: string;
}

type MarvelItem = ICharacter | IComic | IEvent;

interface IDataMarvel {
  limit: number;
  total: number;
  count: number;
  results: MarvelItem[];
}

const CardsSection = () => {
  const [caracteres, setCaracteres] = React.useState<IDataMarvel>(
    {} as IDataMarvel
  );
  const [selectedCategory, setSelectedCategory] = React.useState("events");
  const categories = [
    {
      id: 1,
      name: "events",
    },
    {
      id: 2,
      name: "comics",
    },
    {
      id: 3,
      name: "characters",
    },
  ];

  const isCharacter = (item: MarvelItem): item is ICharacter => {
    return (item as ICharacter).name !== undefined;
  };

  useEffect(() => {
    const getDataCaracteres = async () => {
      try {
        const response = await getMarvel({ category: selectedCategory });
        setCaracteres(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDataCaracteres();
  }, [selectedCategory]);

  return (
    <section className="flex flex-col items-center justify-center py-10 mx-10 md:mx-20">
      {/*Botones de categorias */}
      <div className="flex gap-5 w-full mb-10 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            className={`w-40 py-3 rounded-md font-bold uppercase transition ${
              selectedCategory === category.name
                ? "bg-redPrimary text-textPrimary-dark"
                : "bg-secondaryWhite"
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/*Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {caracteres.results &&
          caracteres.results.map(
            (caracter) =>
              !caracter.thumbnail.path.includes("image_not_available") && (
                <CardsComponent
                  key={caracter.id}
                  title={isCharacter(caracter) ? caracter.name : caracter.title}
                  img={caracter.thumbnail}
                  description={caracter.description}
                />
              )
          )}
      </div>
    </section>
  );
};

export default CardsSection;
