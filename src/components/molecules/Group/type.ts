import type { TextProps } from "@/components/Text";

export type GroupProps = {
  items: TextProps[];
} & React.ComponentProps<"div">;
