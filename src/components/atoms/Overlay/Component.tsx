import type { OverlayProps } from "./type";

export const Overlay = ({ ...props }: OverlayProps) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to top, rgba(18, 105, 204, 0.8), rgba(81, 238, 252, 0.8))",
        display: "grid",
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
      }}
      {...props}
    />
  );
};
