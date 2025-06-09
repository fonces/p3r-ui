import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Overlay } from "@/components/atoms/Overlay";
import { Group } from "@/components/molecules/Group/Component";
import type { TextProps } from "@/components/atoms/Text";

console.log("著作権よくわかりませんすみません。");

const Index: React.FC = () => {
  const navigate = useNavigate({ from: "/" });
  const createToNavigate = (to: string) => () => navigate({ to });
  const items: TextProps[] = [
    {
      children: "SKILL",
      italic: 1,
      order: 1,
      size: 60,
      onClick: createToNavigate("/skill"),
    },
    {
      children: "ITEM",
      italic: 25,
      brightness: 80,
      x: 0.5,
      onClick: createToNavigate("/item"),
    },
    { children: "EQUIP", italic: 25, onClick: createToNavigate("/equip") },
    {
      children: "PERSONA",
      italic: 30,
      order: 3,
      size: 63,
      x: -1,
      onClick: createToNavigate("/persona"),
    },
    {
      children: "STATUS",
      italic: 55,
      brightness: 50,
      onClick: createToNavigate("/status"),
    },
    {
      children: "QUEST",
      italic: 35,
      brightness: 80,
      x: -0.8,
      onClick: createToNavigate("/quest"),
    },
    { children: "COMMU", italic: 40, disabled: true },
    {
      children: "CALENDAR",
      italic: 35,
      order: 2,
      x: -1.4,
      onClick: createToNavigate("/calendar"),
    },
    {
      children: "SYSTEM",
      italic: 70,
      size: 40,
      brightness: 60,
      onClick: createToNavigate("/system"),
    },
  ];

  return (
    <Overlay>
      <Group items={items} />
    </Overlay>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
