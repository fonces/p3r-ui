import css from "./style.module.css";

import type { OverlayProps } from "./type";

export const Overlay = ({ ...props }: OverlayProps) => {
  return <div className={css.root} {...props} />;
};
