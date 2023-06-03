import { styled } from "../../styles/stitches.config";

const StyledNotFoundBody = styled("main", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "3.2rem",
  h1: {
    color: "$red",
  },
  h5: {
    textAlign: "center",
    color: "$grey_400",
    maxWidth: "60rem",
  },
});

export const NotFoundBody = StyledNotFoundBody;
