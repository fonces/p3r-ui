import type { Range } from "@/utils/type";

export type TextProps = {
  brightness?: Range<1, 101>;
  bold?: boolean;
  italic?: Range<1, 101>;
  perspective?: number;
  active?: boolean;
  disabled?: boolean;
  order?: number;
  size?: number;
  x?: number;
  y?: number;
} & React.ComponentProps<"p">;
