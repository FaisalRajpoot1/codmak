import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[11px]",
};
const variants = {
  outline: {
    gray_500_03: "border-gray-500_03 border border-solid text-gray-500_03",
  },
};
const sizes = {
  xs: "h-[40px] pl-3.5 pr-[35px] text-xs",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "outline",
      size = "xs",
      color = "gray_500_03",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-gray-500_03 text-xs font-medium border-gray-500_03 border border-solid rounded-[11px] ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray_500_03"]),
};

export { Input };
