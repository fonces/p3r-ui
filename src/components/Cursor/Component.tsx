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
        setPosition: ({ current, base, item }) => {
          if (rootRef.current && cursorRef.current) {
            const { y, right, width, height } = current;
            rootRef.current.style.top = `${y - base.y + 10}px`;
            rootRef.current.style.right = `${base.right - right - 70}px`;
            cursorRef.current.style.width = `${width * 1.6}px`;
            cursorRef.current.style.height = `calc(tan(60deg) * ${height}px / 2)`;

            const { italic } = item;
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
