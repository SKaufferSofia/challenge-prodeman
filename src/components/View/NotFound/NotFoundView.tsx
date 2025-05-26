import { Button } from "@/components/UI/Button";
import Link from "next/link";
import React from "react";

const NotFoundView = () => {
  return (
    <main
      className="relative grid min-h-full w-full place-items-center text-textPrimary-dark"
      style={{
        backgroundImage: `url("https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/ip_page_marvel_banner_mobile_0d04586279.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center z-10">
        <p className="text-lg font-semibold anton-sc-regular">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-background/80 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button>
            <Link
              href="/"
              className="text-sm font-semibold bg-redPrimary text-white px-4 py-2 rounded"
            >
              Go back home
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
    </main>
  );
};

export default NotFoundView;
