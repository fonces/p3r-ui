import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Quest: React.FC = () => {
  return (
    <Overlay>
      <h1>Questページ</h1>
      <p>ここにクエストの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/quest")({
  component: Quest,
});
