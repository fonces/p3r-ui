import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const System: React.FC = () => {
  return (
    <Overlay>
      <h1>Systemページ</h1>
      <p>ここにシステムの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/system")({
  component: System,
});
