import { Link } from ".";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    hover: {
      options: ["in", "out"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hover: "in",
    className: {},
    vectorClassName: {},
    vector: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-39@2x.png",
    divClassName: {},
    text: "New Arrivals",
    img: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-38.svg",
  },
};
