"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useScrollToSection = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (!section) return;

    const checkElement = () => {
      const element = document.getElementById(section);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        setTimeout(checkElement, 100);
      }
    };

    checkElement();
  }, [section]);
};

export default useScrollToSection;
