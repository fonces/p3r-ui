import type { TextProps } from "@/components/atoms/Text";

export type GroupProps = {
  items: TextProps[];
} & React.ComponentProps<"div">;
