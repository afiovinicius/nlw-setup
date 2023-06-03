import { Plus } from "phosphor-react";

import { Button } from "../Button";

import { HeaderBody } from "./styles";

export const Header = (props: any) => {
  const openMondalNewHabit = () => {
    props.openModal.current.click();
  };

  return (
    <HeaderBody>
      <img
        src="/assets/logo.svg"
        alt="Logo do projeto"
        className="logo"
        loading="lazy"
      />
      <Button
        size={"sm"}
        rounded={"sm"}
        style={"outline"}
        icon={<Plus />}
        onClick={() => openMondalNewHabit()}
      >
        Novo Hábito
      </Button>
    </HeaderBody>
  );
};
