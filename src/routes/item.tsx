import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Item: React.FC = () => {
  return (
    <Overlay>
      <h1>Itemページ</h1>
      <p>ここにアイテムの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/item")({
  component: Item,
});
