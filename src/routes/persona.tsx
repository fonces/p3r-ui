import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Persona: React.FC = () => {
  return (
    <Overlay>
      <h1>Personaページ</h1>
      <p>ここにペルソナの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/persona")({
  component: Persona,
});
