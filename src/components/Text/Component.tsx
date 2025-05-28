import css from "./style.module.css";

import type { TextProps } from "./type";

export const Text = ({
  brightness = 100,
  bold = false,
  italic = 50,
  active = false,
  disabled = false,
  order = 0,
  size,
  x,
  ...props
}: TextProps) => {
  return (
    <p
      className={css.root}
      role="text"
      data-active={active}
      data-disabled={disabled}
      style={{
        filter: `brightness(${1 - ((100 - brightness) / 1000) * 2})`,
        ...(order && { zIndex: order }),
        ...(bold && { WebkitTextStroke: "0.1em" }),
        ...(italic && {
          transform: `perspective(1.5em) rotateY(${
            (italic - 50) / 10
          }deg) rotate(${(italic - 50) / 4}deg)`,
        }),
        ...(active && {
          filter: "brightness(1)",
          ...(!disabled && {
            color: "#040404",
            zIndex: 100,
          }),
        }),
        ...(disabled && { filter: "brightness(0.4)" }),
        ...(size && { fontSize: `${size}px` }),
        ...(x && { left: `${x}em` }),
      }}
      {...props}
    />
  );
};
