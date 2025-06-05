import { Overlay } from "@/components/atoms/Overlay";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Calendar: React.FC = () => {
  return (
    <Overlay>
      <h1>Calendarページ</h1>
      <p>ここにカレンダーの内容を追加してください。</p>
    </Overlay>
  );
};

export const Route = createFileRoute("/calendar")({
  component: Calendar,
});
