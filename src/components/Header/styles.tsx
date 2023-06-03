import { styled } from "../../styles/stitches.config";

const StyledHeaderBody = styled("header", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.6rem",
  ".logo": {
    maxWidth: "14.8rem",
    height: "6.8rem",
  },
});

export const HeaderBody = StyledHeaderBody;
