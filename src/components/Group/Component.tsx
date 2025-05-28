import { useState, useRef, useEffect } from "react";
import { Cursor, type CursorHandler } from "@/components/Cursor";
import { Text } from "@/components/Text";

import type { GroupProps } from "./type";

import css from "./style.module.css";

const toBeforeRectScaleSize = (rect: DOMRect): DOMRect => {
  const scale = 1.4;
  const height = rect.height / scale;
  const width = rect.width / scale;
  const heightDiff = rect.height - height;
  const widthDiff = rect.width - width;

  return {
    ...rect,
    bottom: rect.bottom - heightDiff / 2,
    height,
    left: rect.left + widthDiff / 2,
    right: rect.right - widthDiff / 2,
    top: rect.top + heightDiff / 2,
    width,
    x: rect.x + widthDiff / 2,
    y: rect.top + heightDiff / 2,
  };
};

export const Group = ({ items, ...props }: GroupProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<CursorHandler>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (rootRef.current && cursorRef.current) {
      const base = rootRef.current.getBoundingClientRect();
      const node = rootRef.current.childNodes[
        activeIndex
      ] as HTMLDetailsElement;
      const current = node.getBoundingClientRect();
      const computedStyles = getComputedStyle(node);
      const item = items[activeIndex];

      cursorRef.current.setPosition({
        current:
          computedStyles.getPropertyValue("scale") === "1"
            ? current
            : toBeforeRectScaleSize(current),
        base,
        item,
      });
    }
  }, [items, activeIndex]);

  return (
    <div ref={rootRef} className={css.root} role="group" {...props}>
      {items.map((item, index) => (
        <Text
          key={index}
          bold
          active={activeIndex === index}
          onMouseEnter={() => !item.disabled && setActiveIndex(index)}
          {...item}
        />
      ))}
      <Cursor ref={cursorRef} />
    </div>
  );
};
