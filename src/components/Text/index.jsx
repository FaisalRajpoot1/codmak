import React from "react";

const sizes = {
  xs: "text-[5px] font-medium leading-[131.82%]",
  lg: "text-xs font-medium",
  s: "text-[8px] font-normal",
  "2xl": "text-lg font-normal",
  "3xl": "text-[27px] font-medium",
  xl: "text-base font-medium",
  md: "text-[10px] font-medium leading-[131.82%]",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
