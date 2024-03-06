import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    black_900: "bg-black-900 shadow-sm text-white-A700",
    gray_200: "bg-gray-200",
    black_900_01: "bg-black-900_01 text-white-A700",
    white_A700_2d: "bg-white-A700_2d shadow-sm text-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    white_A700_42: "bg-white-A700_42 text-white-A700",
  },
  outline: {
    white_A700_3d: "border-white-A700_3d border border-solid text-white-A700",
  },
};
const sizes = {
  md: "h-[40px] px-[7px]",
  sm: "h-[36px] px-3.5 text-xs",
  lg: "h-[46px] px-[35px] text-base",
  xs: "h-[24px] px-[13px] text-base",
  "2xl": "h-[58px] px-[18px] text-[15px]",
  xl: "h-[48px] px-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "lg", "xs", "2xl", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "black_900",
    "gray_200",
    "black_900_01",
    "white_A700_2d",
    "blue_gray_900_01",
    "white_A700_42",
    "white_A700_3d",
  ]),
};

export { Button };
