import { useEffect, useState } from "react";

const useLimitView = () => {
  const [limit, setLimit] = useState("16");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const limit = localStorage.getItem("limit");
      if (limit) {
        setLimit(limit);
      }
    }
  }, []);

  const handleChangeLimit = (limit: string) => {
    if (typeof window !== "undefined") localStorage.setItem("limit", limit);
    setLimit(limit);
  };

  return {
    limit,
    setLimit,
    handleChangeLimit,
  };
};

export default useLimitView;
