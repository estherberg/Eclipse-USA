import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    style: {
      options: ["mobile", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "mobile",
    className: {},
    frame: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-214.svg",
  },
};
