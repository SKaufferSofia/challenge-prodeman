import React from "react";
import clsx from "clsx";

const Checkbox = ({
  checked,
  onChange,
}: {
  checked?: boolean;
  onChange?: () => void;
}) => {
  return (
    <label className="relative flex justify-center items-center cursor-pointer w-5 h-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={clsx(
          "cursor-pointer peer appearance-none w-5 h-5 bg-background dark:bg-secondaryBlack rounded transition-colors",
          "checked:border-redPrimary checked:bg-redPrimary"
        )}
      />
      <span
        className={clsx(
          " absolute w-2.5 h-1 border-b-2 border-l-2 border-white rotate-[-45deg] scale-0",
          "perspective-origin-top-left transition-transform duration-200 ease-in-out",
          "peer-checked:scale-100"
        )}
      />
    </label>
  );
};

export default Checkbox;
