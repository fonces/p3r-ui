import type { RefObject } from "react";
import type { TextProps } from "../Text";

export type CursorProps = {
  ref: RefObject<HTMLDivElement | null>;
  shadow?: boolean;
};

export type CursorHandler = {
  setPosition: (payload: {
    current: DOMRect;
    base: DOMRect;
    item: TextProps;
  }) => void;
  getRootNode: () => HTMLDivElement;
};
