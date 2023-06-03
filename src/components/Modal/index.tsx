import { X } from "phosphor-react";

import {
  Content,
  ModalBody,
  Overlay,
  Trigger,
  Close,
  Title,
  HeaderModal,
} from "./styles";

export const Modal = (props: any) => {
  return (
    <ModalBody open={props.isOpen} onOpenChange={props.controlOpen}>
      <Trigger asChild>{props.button}</Trigger>
      <Overlay>
        <Content>
          <HeaderModal>
            <Title>{props.title}</Title>
            <Close>
              <X size={24} />
            </Close>
          </HeaderModal>
          {props.children && props.children}
        </Content>
      </Overlay>
    </ModalBody>
  );
};
