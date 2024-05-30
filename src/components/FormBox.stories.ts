import { StoryObj, Meta } from "@storybook/react";
import FormBox from "./FormBox";
import { FormField } from "./FormBox.types";

const meta: Meta<typeof FormBox> = {
  title: "Example/Formbox",
  component: FormBox,
  // ...
};

export default meta;

// const Template: StoryFn<typeof FormBox> = (args) => <FormBox {...args} />;
const SubmitAction = (e: any) => {
  console.log(e);
};

type Story = StoryObj<typeof FormBox>;

export const Primary: Story = {
  args: {
    submitAction: SubmitAction,
  },
};
