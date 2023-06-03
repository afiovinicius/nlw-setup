import { styled } from "../../styles/stitches.config";

import * as DialogPrimitive from "@radix-ui/react-dialog";

const StyledTrigger = styled(DialogPrimitive.Trigger, {
  '&[data-state="closed"]': {
    display: "none",
  },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  background: "hsla(0, 0%, 0%, 0.8)",
  width: "100%",
  height: "100vh",
  position: "fixed",
  inset: 0,
  zIndex: 2025,
});

const StyledContent = styled(DialogPrimitive.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3.2rem",
  gap: "3.2rem",
  width: "90%",
  maxWidth: "40rem",
  maxHheight: "90%",
  background: "$grey_600",
  borderRadius: "1.6rem",
});

const StyledHeaderModal = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
  width: "100%",
});

const StyledTitle = styled(DialogPrimitive.Title, {
  width: "100%",
  color: "$white",
});

const StyledClose = styled(DialogPrimitive.Close, {
  color: "$grey_300",
  "&:hover": {
    color: "$grey_100",
  },
});

export const ModalBody = DialogPrimitive.Root;
export const Trigger = StyledTrigger;
export const Overlay = StyledOverlay;
export const Content = StyledContent;
export const HeaderModal = StyledHeaderModal;
export const Title = StyledTitle;
export const Close = StyledClose;
