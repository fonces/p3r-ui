import { useImperativeHandle, useRef, forwardRef } from "react";

import type { CursorProps, CursorHandler } from "./type";

import css from "./style.module.css";
import { toAfterRectScaleSize } from "@/utils/dom";

export const Cursor = forwardRef<CursorHandler, CursorProps>(
  ({ shadow }, ref) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => {
      return {
        setPosition: ({ current, base, item }) => {
          if (rootRef.current && cursorRef.current) {
            const { y, left, width, height } = toAfterRectScaleSize(current);

            rootRef.current.style.top = `${y - base.y}px`;
            rootRef.current.style.left = `${left - base.left}px`;
            cursorRef.current.style.width = `${width * 1.1}px`;
            cursorRef.current.style.height = `calc(tan(60deg) * ${
              height * 1.1
            }px / 2)`;

            const { italic, perspective } = item;
            cursorRef.current.style.transform = italic
              ? `rotateY(${(italic - 50) / 10}deg) rotate(${
                  (italic - 50) / (shadow ? 2 : 2.5)
                }deg)`
              : "";
            (cursorRef.current.parentNode as HTMLDivElement).style.perspective =
              perspective ? `${perspective}em` : "";
          }
        },
        getRootNode: () => rootRef.current?.cloneNode(true) as HTMLDivElement,
      };
    }, [shadow]);

    return (
      <div ref={rootRef} className={[css.root, shadow && css.shadow].join(" ")}>
        <div className={!shadow ? css.heartbeat : ""}>
          <div ref={cursorRef} className={css.cursor} />
        </div>
      </div>
    );
  }
);
