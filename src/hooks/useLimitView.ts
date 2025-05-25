import { useEffect, useState } from "react";

const useLimitView = () => {
  const [limit, setLimit] = useState("16");

  useEffect(() => {
    const limit = localStorage.getItem("limit");
    if (limit) {
      setLimit(limit);
    }
  }, []);

  const handleChangeLimit = (limit: string) => {
    localStorage.setItem("limit", limit);
    setLimit(limit);
  };

  return {
    limit,
    setLimit,
    handleChangeLimit,
  };
};

export default useLimitView;
