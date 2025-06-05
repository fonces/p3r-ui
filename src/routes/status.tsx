import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Status: React.FC = () => {
  return (
    <Overlay>
      <h1>Statusページ</h1>
      <p>ここにステータスの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/status")({
  component: Status,
});
