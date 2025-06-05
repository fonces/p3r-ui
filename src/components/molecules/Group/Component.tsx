import { useState, useRef, useEffect } from "react";
import { Cursor, type CursorHandler } from "@/components/atoms/Cursor";
import { Text } from "@/components/atoms/Text";

import type { GroupProps } from "./type";

import css from "./style.module.css";

export const Group = ({ items, ...props }: GroupProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<CursorHandler>(null);
  const shadowRef = useRef<CursorHandler>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (rootRef.current && cursorRef.current && shadowRef.current) {
      const base = rootRef.current.getBoundingClientRect();
      const node = rootRef.current.childNodes[activeIndex] as HTMLDivElement;
      const current = node.getBoundingClientRect();
      const item = items[activeIndex];

      cursorRef.current.setPosition({
        current,
        base,
        item,
      });
      shadowRef.current.setPosition({
        current,
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
      <Cursor ref={shadowRef} shadow />
    </div>
  );
};
