import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./index";

type textFieldProps = {
  className?: string;
  label?: string;
  inputPlaceholder?: string;
  helperText?: string;
  status?: "default" | "success" | "error";
  maxLength?: number;
  value?: string;
};

const meta: Meta<textFieldProps> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "추가적인 CSS 클래스를 지정합니다.",
      control: "text",
    },
    label: {
      description: "TextField의 Label 텍스트를 지정합니다.",
      control: "text",
      defaultValue: "Label",
    },
    inputPlaceholder: {
      description: "Input의 Placeholder 텍스트를 지정합니다.",
      control: "text",
      defaultValue: "Enter text",
    },
    helperText: {
      description: "HelperText의 내용을 지정합니다.",
      control: "text",
      defaultValue: "Helper text goes here.",
    },
    status: {
      description: "Label, Input, HelperText의 상태를 지정합니다.",
      control: "select",
      options: ["default", "success", "error"],
      defaultValue: "default",
    },
    maxLength: {
      description: "Input의 최대 길이를 지정합니다.",
      control: "number",
      defaultValue: 50,
    },
    value: {
      description: "Input의 값을 지정합니다.",
      control: "text",
      defaultValue: "",
    },
  },
};

export default meta;

type Story = StoryObj<textFieldProps>;

export const Interactive: Story = {
  args: {
    className: "",
    label: "Label",
    inputPlaceholder: "Enter text",
    helperText: "Helper text goes here.",
    status: "default",
    maxLength: 15,
    value: "",
  },
  render: function renderInteractive(args) {
    return (
      <TextField className={args.className}>
        <TextField.Label status={args.status}>{args.label}</TextField.Label>
        <TextField.Input
          status={args.status}
          placeholder={args.inputPlaceholder}
          maxLength={args.maxLength}
          value={args.value}
        />
        <TextField.HelperText status={args.status}>{args.helperText}</TextField.HelperText>
      </TextField>
    );
  },
};
