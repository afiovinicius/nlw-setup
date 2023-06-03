import { Check } from "phosphor-react";

import { CheckBoxBody, CheckboxCheck, CheckboxRoot } from "./styles";

export const CheckBox = (props: any) => {
  return (
    <CheckBoxBody>
      <CheckboxRoot defaultChecked={props.checked}>
        <CheckboxCheck>
          <Check size={20} />
        </CheckboxCheck>
      </CheckboxRoot>
      <label>{props.label}</label>
    </CheckBoxBody>
  );
};
