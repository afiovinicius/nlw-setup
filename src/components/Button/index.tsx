import { IconContext } from "phosphor-react";

import { ButtonBody } from "./styles";

import type * as Stitches from "@stitches/react";

interface ButtonProps extends Stitches.VariantProps<typeof ButtonBody> {
  children: React.ReactNode;
  icon?: JSX.Element | any;
  onClick?: any;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const ConfigIcon = IconContext.Provider;
  const Icon = () => props.icon;

  return (
    <ButtonBody {...props}>
      <ConfigIcon value={{ size: 24, weight: "regular" }}>
        <Icon />
      </ConfigIcon>
      {props.children}
    </ButtonBody>
  );
};
