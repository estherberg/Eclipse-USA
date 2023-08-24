import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    style: {
      options: ["primary", "link", "secondary"],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["no-icon", "trailing", "leading"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "primary",
    small: true,
    blue: true,
    iconPosition: "no-icon",
    className: {},
    text: "Button",
  },
};
