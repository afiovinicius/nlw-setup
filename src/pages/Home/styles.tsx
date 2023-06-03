import { styled } from "../../styles/stitches.config";

import { Container } from "../../styles/globalStyles";

const StyledSectionBody = styled("section", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [`${Container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6.4rem",
  },
});

const StyledHabitsBody = styled("div", {
  width: "100%",
  maxWidth: "108.8rem",
  height: "36rem",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "3.2rem",
});

const StyledBarHabits = styled("aside", {
  width: "7.2rem",
  height: "36rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  padding: "1.6rem",
  border: "0.1rem solid $grey_300",
  borderRadius: "0.8rem",
  p: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "4rem",
    height: "4rem",
  },
});

const StyledViewHabits = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "0.8rem",
  padding: "1.6rem",
  border: "0.1rem solid $grey_300",
  borderRadius: "0.8rem",
});

export const SectionBody = StyledSectionBody;
export const HabitsBody = StyledHabitsBody;
export const BarHabits = StyledBarHabits;
export const ViewHabits = StyledViewHabits;
