import css from "./style.module.css";

import type { TextProps } from "./type";

export const Text = ({
  brightness = 100,
  bold = false,
  italic = 50,
  perspective = 1,
  active = false,
  disabled = false,
  order = 0,
  size,
  x,
  y,
  ...props
}: TextProps) => {
  return (
    <div
      className={css.root}
      role="button"
      style={{
        ...(perspective && {
          perspective: `${perspective}em`,
        }),
        ...(order && { zIndex: order }),
        ...(size && { fontSize: `${size}px` }),
        ...(x && { left: `${x}em` }),
        ...(y && { top: `${y}em` }),
        ...(active &&
          !disabled && {
            color: "#040404",
            zIndex: 100,
          }),
      }}
    >
      <p
        className={css.text}
        role="text"
        data-active={active}
        data-disabled={disabled}
        style={{
          filter: `brightness(${1 - ((100 - brightness) / 1000) * 3})`,
          ...(bold && { WebkitTextStroke: "0.1em" }),
          ...(italic && {
            transform: `rotateY(${(italic - 50) / 10}deg) rotate(${
              (italic - 50) / 2
            }deg)`,
          }),
          ...(active && { filter: "brightness(1)" }),
          ...(disabled && { filter: "brightness(0.4)", cursor: "default" }),
        }}
        {...props}
      />
    </div>
  );
};
