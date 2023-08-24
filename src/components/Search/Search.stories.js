import { Search } from ".";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    stateProp: {
      options: ["clicked-open", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "clicked-open",
    frame: "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-402-2.svg",
  },
};
