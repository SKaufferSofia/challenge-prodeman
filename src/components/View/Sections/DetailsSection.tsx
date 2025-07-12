"use client";
import { Button } from "@/components/UI/Button";
import useDataMarvelDetails from "@/hooks/useDataMarvelDetails";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const DetailsSection = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { isError, isLoading, data } = useDataMarvelDetails(
    section as string,
    id
  );

  console.log("data", data);

  return (
    <main className="w-full  mt-36 p-10 flex flex-col text-2xl items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data &&
        data.map((item) => (
          <div key={item.id} className="flex flex-col p-10 gap-5">
            <Image
              src={item.img}
              alt={item.name}
              width={5000}
              height={5000}
              className="w-1/2"
            />
            <div className="space-y-10">
              <h1 className="text-4xl anton-sc-bold">{item.name}</h1>
              <p>{item.description}</p>
            </div>

            <Link href={item.detailUrl as string} target="_blank">
              <Button>Read more</Button>
            </Link>
            {"comics" in item &&
              Array.isArray(item.comics) &&
              item.comics.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-3xl anton-sc-bold">Comics</h2>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {item.comics.map((comic) => (
                      <li key={comic.id} className="mb-3">
                        <h3 className="text-xl">{comic.name}</h3>
                        <Image
                          src={comic.img}
                          alt={comic.name}
                          width={500}
                          height={500}
                        />
                      </li>
                    ))}
                  </ul>
                  <Link href={item.comicsUrl as string} target="_blank">
                    <Button>Read more comics</Button>
                  </Link>
                </div>
              )}
            {"series" in item &&
              Array.isArray(item.series) &&
              item.series.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-3xl anton-sc-bold">Series</h2>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {item.series.map((serie) => (
                      <li key={serie.id} className="mb-3">
                        <h3 className="text-xl">{serie.name}</h3>
                        <Image
                          src={serie.img}
                          alt={serie.name}
                          width={500}
                          height={500}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        ))}
    </main>
  );
};

export default DetailsSection;
