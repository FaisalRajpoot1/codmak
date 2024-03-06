import React from "react";

const sizes = {
  "3xl": "text-2xl font-bold",
  "2xl": "text-[22px] font-bold",
  "5xl": "text-[32px] font-bold",
  "4xl": "text-3xl font-semibold",
  "7xl": "text-4xl font-bold",
  "6xl": "text-[35px] font-bold",
  "9xl": "text-[64px] font-bold",
  "8xl": "text-5xl font-bold",
  xl: "text-xl font-semibold leading-[131.82%]",
  s: "text-xs font-semibold",
  md: "text-base font-semibold",
  "12xl": "text-[120px] font-bold",
  xs: "text-[11px] font-semibold",
  lg: "text-lg font-bold",
  "11xl": "text-[86px] font-bold",
  "10xl": "text-[73px] font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
