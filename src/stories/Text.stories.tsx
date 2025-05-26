import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "./root.css";

import { Text } from "@/components/Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    brightness: {
      type: "number",
    },
    bold: {
      type: "boolean",
    },
    italic: {
      type: "number",
    },
    active: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    order: {
      type: "number",
    },
    size: {
      type: "number",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "SKILL",
  },
};

export const Bold: Story = {
  args: {
    children: "SKILL",
    bold: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "SKILL",
    disabled: true,
  },
};

export const Italic: Story = {
  args: {
    children: "SKILL",
    italic: 100,
  },
};

export const Active: Story = {
  args: {
    children: "SKILL",
    active: true,
  },
};
