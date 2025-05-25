import NavbarComponent from "@/components/Navbar/NavbarComponent";
import FavoritesView from "@/components/View/Favorites/FavoritesView";
import React from "react";

const FavoritePage = () => {
  return (
    <main>
      <NavbarComponent />
      <FavoritesView />
    </main>
  );
};

export default FavoritePage;
