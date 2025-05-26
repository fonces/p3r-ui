import { useImperativeHandle, useRef, forwardRef } from "react";

import type { CursorProps, CursorHandler } from "./type";

import css from "./style.module.css";

export const Cursor = forwardRef<CursorHandler, CursorProps>((_, ref) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        setPosition: ({ rect, base, item }) => {
          if (rootRef.current && cursorRef.current) {
            const { y, right, bottom, width } = rect;
            const { italic } = item;

            rootRef.current.style.top = `${y - base.y + (bottom - y) / 3}px`;
            rootRef.current.style.right = `${base.right - right - 50}px`;
            cursorRef.current.style.width = `${width * 1.3}px`;

            if (italic) {
              cursorRef.current.style.transform = `rotate3d(1, 1, 1, ${
                (italic - 50) / 2
              }deg)`;
            }
          }
        },
      };
    },
    []
  );

  return (
    <div ref={rootRef} className={css.root}>
      <div className={css.x}>
        <div className={css.y}>
          <div ref={cursorRef} className={css.cursor} />
        </div>
      </div>
    </div>
  );
});
