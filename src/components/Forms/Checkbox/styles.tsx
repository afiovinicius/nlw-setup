import { styled } from "../../../styles/stitches.config";

import * as Checkbox from "@radix-ui/react-checkbox";

const StyledCheckBoxBody = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  label: {
    color: "$grey_200",
  },
});

const StyledCheckboxRoot = styled(Checkbox.Root, {
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "0.8rem",
  padding: "0.6rem",
  '&[data-state="unchecked"]': {
    border: "0.2rem solid $grey_500",
  },
  '&[data-state="checked"]': {
    background: "$green",
  },
});

const StyledCheckboxCheck = styled(Checkbox.Indicator, {
  color: "$white",
});

export const CheckBoxBody = StyledCheckBoxBody;
export const CheckboxRoot = StyledCheckboxRoot;
export const CheckboxCheck = StyledCheckboxCheck;
