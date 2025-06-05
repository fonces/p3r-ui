import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Skill: React.FC = () => {
  return (
    <Overlay>
      <h1>Skillページ</h1>
      <p>ここにスキルの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/skill")({
  component: Skill,
});
