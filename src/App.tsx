import { Overlay } from "./components/Overlay";
import { Group } from "./components/Group/Component";

import type { TextProps } from "./components/Text";

console.log("著作権よくわかりませんすみません。");
const items: TextProps[] = [
  { children: "SKILL", italic: 1, order: 1, size: 60 },
  { children: "ITEM", italic: 65, brightness: 80 },
  { children: "EQUIP", italic: 10 },
  { children: "PERSONA", italic: 3, order: 3, size: 59 },
  { children: "STATUS", italic: 60, brightness: 50 },
  { children: "QUEST", italic: 7, brightness: 80 },
  { children: "COMMU", italic: 30, disabled: true },
  { children: "CALENDAR", italic: 15, disabled: true },
  { children: "SYSTEM", italic: 70 },
];

function App() {
  return (
    <Overlay>
      <Group items={items} />
    </Overlay>
  );
}

export default App;
