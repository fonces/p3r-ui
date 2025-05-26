import type { Range } from "@/utils/type";

export type TextProps = {
  brightness?: Range<1, 101>;
  bold?: boolean;
  italic?: Range<1, 101>;
  active?: boolean;
  disabled?: boolean;
  order?: number;
  size?: number;
} & React.ComponentProps<"p">;
