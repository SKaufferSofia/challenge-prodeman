"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "../UI/Button";
import { FaXmark } from "react-icons/fa6";
import ThemeToggleSwiper from "./ThemeToggleSwiper";

const NavbarComponent = () => {
  const [openToggle, setOpenToggle] = React.useState(false);
  const [bgColor, setBgColor] = React.useState(
    "bg-transparent text-textPrimary-dark"
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setBgColor(
          "bg-secondaryWhite text-textPrimary dark:text-textPrimary-dark dark:bg-secondaryBlack"
        );
      } else {
        setBgColor("bg-transparent text-textPrimary-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //ESTILOS
  const itemClass =
    "text-2xl anton-sc-regular bg-transparent transition-all duration-200 hover:bg-redPrimary p-2 hover:text-textPrimary-dark hover:scale-110 hidden md:flex";
  const itemClassResponsive = "text-xl anton-sc-regular";

  return (
    <nav
      className={`w-full ${bgColor} p-5 fixed top-0 left-0 w-full z-50 transition-all duration-300 py-10`}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center md:justify-center gap-5 md:gap-16">
        <Link href="/">
          <p className={itemClass}>HOME</p>
        </Link>

        <Image
          src="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/marvel-logo.png"
          alt="logo"
          className={`${
            bgColor.includes("transparent")
              ? "md:filter md:grayscale md:brightness-75 md:opacity-20 transition-all duration-300"
              : ""
          }`}
          width={170}
          height={72}
        />

        <Button
          className="block md:hidden"
          onClick={() => setOpenToggle(!openToggle)}
        >
          {openToggle ? (
            <FaXmark
              size={30}
              className={`${
                bgColor.includes("transparent") ? "text-textPrimary-dark" : ""
              }`}
            />
          ) : (
            <FaBars
              size={30}
              className={`${
                bgColor.includes("transparent") ? "text-textPrimary-dark" : ""
              }`}
            />
          )}
        </Button>

        <Link href="/favorites">
          <p className={itemClass}>FAVORITES</p>
        </Link>
        <div className="md:absolute right-2 md:right-5 md:top-1/2 md:transform md:-translate-y-1/2">
          <ThemeToggleSwiper />
        </div>
      </div>

      {/* DROPDOWN MENU */}
      {openToggle && (
        <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
          <Link href="/home">
            <p
              className={
                bgColor.includes("transparent")
                  ? itemClassResponsive
                  : itemClassResponsive
              }
            >
              HOME
            </p>
          </Link>
          <Link href="/favorites">
            <p
              className={
                bgColor.includes("transparent")
                  ? itemClassResponsive
                  : itemClassResponsive
              }
            >
              FAVORITES
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
