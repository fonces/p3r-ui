import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Commu: React.FC = () => {
  return (
    <Overlay>
      <h1>Commuページ</h1>
      <p>ここにコミュの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/commu")({
  component: Commu,
});
