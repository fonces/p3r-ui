import { Overlay } from "./components/Overlay";
import { Group } from "./components/Group/Component";

import type { TextProps } from "./components/Text";

console.log("著作権よくわかりませんすみません。");
const items: TextProps[] = [
  { children: "SKILL", italic: 1, order: 1, size: 60 },
  { children: "ITEM", italic: 25, brightness: 80, x: 0.5 },
  { children: "EQUIP", italic: 25 },
  {
    children: "PERSONA",
    italic: 10,
    order: 3,
    size: 63,
    x: -1,
  },
  { children: "STATUS", italic: 55, brightness: 50 },
  { children: "QUEST", italic: 35, brightness: 80, x: -0.8 },
  { children: "COMMU", italic: 40, disabled: true },
  { children: "CALENDAR", italic: 35, order: 2, x: -1.4 },
  {
    children: "SYSTEM",
    italic: 70,
    size: 40,
    brightness: 60,
  },
];

function App() {
  return (
    <Overlay>
      <Group items={items} />
    </Overlay>
  );
}

export default App;
