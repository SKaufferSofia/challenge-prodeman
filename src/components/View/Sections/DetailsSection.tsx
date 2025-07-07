"use client";
import useDataMarvelDetails from "@/hooks/useDataMarvelDetails";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const DetailsSection = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { isError, isLoading, data } = useDataMarvelDetails(
    section as string,
    id
  );

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
          </div>
        ))}
    </main>
  );
};

export default DetailsSection;
