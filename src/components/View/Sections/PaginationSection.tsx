import React from "react";
import { Button } from "@/components/UI/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationSectionProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  scrollToGrid: () => void;
}

const PaginationSection = ({
  page,
  totalPages,
  setPage,
  scrollToGrid,
}: PaginationSectionProps) => {
  const [limit, setLimit] = React.useState(4);

  React.useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth < 640) {
        setLimit(3);
      } else if (window.innerWidth < 768) {
        setLimit(4);
      } else if (window.innerWidth < 1024) {
        setLimit(6);
      } else {
        setLimit(8);
      }
    };

    updateLimit(); // set on mount
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const handleChange = (newPage: number) => {
    setPage(newPage);
    scrollToGrid();
  };

  const half = Math.floor(limit / 2);
  let start = Math.max(2, page - half);
  let end = Math.min(totalPages - 1, page + half);

  if (page <= half + 1) {
    start = 2;
    end = Math.min(totalPages - 1, limit + 1);
  } else if (page >= totalPages - half) {
    start = Math.max(2, totalPages - limit);
    end = totalPages - 1;
  }

  const paginadoNumeros = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
      <p className="font-medium">
        Page {page} of {totalPages}
      </p>
      <div className="flex gap-1 md:gap-2 flex-wrap justify-center">
        <Button
          onClick={() => handleChange(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="cursor-pointer disabled:opacity-50"
        >
          <FaArrowLeft className="h-4 w-4" />
        </Button>

        {start > 2 && (
          <>
            <Button
              onClick={() => handleChange(1)}
              className="cursor-pointer w-10 h-10 font-semibold bg-textPrimary-dark"
            >
              1
            </Button>
            <span className="w-8 h-8 flex items-center justify-center">
              ...
            </span>
          </>
        )}

        {paginadoNumeros.map((p) => (
          <Button
            key={p}
            onClick={() => handleChange(p)}
            className={`cursor-pointer w-10 h-10 font-semibold ${
              page === p
                ? "bg-redPrimary font-bold text-textPrimary-dark"
                : "bg-textPrimary-dark"
            }`}
          >
            {p}
          </Button>
        ))}

        {end < totalPages - 1 && (
          <>
            <span className="w-8 h-8 flex items-center justify-center">
              ...
            </span>
            <Button
              onClick={() => handleChange(totalPages)}
              className="cursor-pointer w-10 h-10 font-semibold bg-textPrimary-dark"
            >
              {totalPages}
            </Button>
          </>
        )}

        <Button
          onClick={() => handleChange(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
          className="cursor-pointer disabled:opacity-50"
        >
          <FaArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PaginationSection;
