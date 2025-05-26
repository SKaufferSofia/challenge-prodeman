"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "../UI/Button";
import { FaXmark } from "react-icons/fa6";

const NavbarComponent = () => {
  const [openToggle, setOpenToggle] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const [bgColor, setBgColor] = React.useState(
    "bg-transparent text-textPrimary-dark"
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setBgColor(
          "bg-secondaryWhite text-textPrimary"
          //  theme === "dark" ? "bg-secondaryBlack" : "bg-secondaryWhite"
        );
      } else {
        setBgColor("bg-transparent text-textPrimary-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  //ESTILOS
  const itemClass =
    "text-2xl anton-sc-regular bg-transparent transition-all duration-200 hover:bg-redPrimary p-2 hover:text-textPrimary-dark hover:scale-110 hidden md:flex";
  const itemClassResponsive = "text-xl anton-sc-regular text-textPrimary";

  return (
    <nav
      className={`${bgColor} p-5 fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center md:justify-center md:gap-16">
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
            <FaXmark size={30} className="text-textPrimary" />
          ) : (
            <FaBars size={30} className="text-textPrimary" />
          )}
        </Button>

        <Link href="/favorites">
          <p className={itemClass}>FAVORITES</p>
        </Link>
      </div>

      {/* DROPDOWN MENU */}
      {openToggle && (
        <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
          <Link href="/home">
            <p className={itemClassResponsive}>HOME</p>
          </Link>
          <Link href="/favorites">
            <p className={itemClassResponsive}>FAVORITES</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
