import { Spiner } from "@/components/UI/Spiner";
import FavoritesView from "@/components/View/Favorites/FavoritesView";
import React from "react";
import { Suspense } from "react";

const FavoritePage = () => {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Spiner />
          </div>
        }
      >
        <FavoritesView />
      </Suspense>
    </main>
  );
};

export default FavoritePage;
