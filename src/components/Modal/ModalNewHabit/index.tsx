import React from "react";

import { toast } from "react-toastify";

import { Check } from "phosphor-react";

import { Modal } from "..";
import { Button } from "../../Button";

export const ModalNewHabit = React.forwardRef((props: any, ref: any) => {
  const handleCreateHabit = () => {
    try {
      toast.success("Hábito criado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <Modal button={<button ref={ref} />} title="Criar hábito">
      <Button
        type="submit"
        size={"sm"}
        style={"solid"}
        rounded={"sm"}
        wd={true}
        icon={<Check />}
      >
        Criar Hábito
      </Button>
    </Modal>
  );
});
