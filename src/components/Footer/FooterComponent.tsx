import React from "react";
import Link from "next/link";
import { listFooter } from "./listFooter";

const FooterComponent = () => {
  return (
    <footer className="bg-black text-textPrimary-dark py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Marvel Web by Sofia Kauffer — Challenge
            for Prodeman.
          </p>
          <p className="text-xs text-textPrimary-dark/80">
            Data provided by the{" "}
            <a
              href="https://developer.marvel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-all duration-200 hover:text-redPrimary"
            >
              Marvel API
            </a>
            .
          </p>
        </div>

        <nav className="flex gap-4 text-sm">
          {listFooter.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.target ? item.target : "_self"}
              className="hover:text-redPrimary transition-all duration-200 hover:scale-110"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default FooterComponent;
