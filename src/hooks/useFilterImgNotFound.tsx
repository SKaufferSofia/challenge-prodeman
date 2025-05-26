import { ICharacterFront, IComicFront, ISeriesFront } from "@/interfaces/data";
import React from "react";

const useFilterImgNotFound = () => {
  const [imgNotFound, setImgNotFound] = React.useState<boolean>(false);

  const handleChangeImg = (value: boolean) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("imgNotFound", JSON.stringify(value));
    }
    setImgNotFound(value);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("imgNotFound");
      if (storedValue) {
        setImgNotFound(JSON.parse(storedValue));
      }
    }
  }, []);

  const filterDataImgNotFound = (
    data: ICharacterFront[] | IComicFront[] | ISeriesFront[] | []
  ) => {
    if (imgNotFound) {
      return data.filter((item) => !item.img.includes("image_not_available"));
    }

    return data;
  };

  return {
    imgNotFound,
    handleChangeImg,
    filterDataImgNotFound,
  };
};

export default useFilterImgNotFound;
