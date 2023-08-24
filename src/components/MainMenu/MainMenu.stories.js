import { MainMenu } from ".";

export default {
  title: "Components/MainMenu",
  component: MainMenu,
  argTypes: {
    screen: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "desktop",
    className: {},
    frame: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-397-2.svg",
    groupClassName: {},
    group: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/group-86-2@2x.png",
    vector: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-37.svg",
    linkVectorClassName: {},
    linkVector: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-39@2x.png",
    img: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-35.svg",
    frame1: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-401-2.svg",
    frame2: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-403-2.svg",
    searchFrame: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-402-3.svg",
  },
};
