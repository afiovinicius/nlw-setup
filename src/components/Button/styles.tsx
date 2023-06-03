import { styled } from "../../styles/stitches.config";

const StyledButtonBody = styled("button", {
  width: "fit-content",
  height: "5.2rem",
  color: "$white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  transition: "all 0.3s ease-in",

  variants: {
    size: {
      sm: {
        padding: "1.6rem 2.4rem",
      },
      lg: {
        padding: "3.2rem 4.8rem",
      },
    },
    rounded: {
      sm: {
        borderRadius: "0.8rem",
      },
      lg: {
        borderRadius: "1.6rem",
      },
    },
    style: {
      outline: {
        border: "0.1rem solid $violet_200",
        svg: {
          color: "$violet_200",
        },
        "&:hover": {
          background: "hsla(258, 90%, 66%, 0.16)",
        },
        "&:disabled": {
          opacity: 0.5,
          pointerEvents: "none",
        },
      },
      solid: {
        background: "$blue",
        "&:hover": {
          transform: "scale(1.1)",
        },
        "&:disabled": {
          opacity: 0.5,
          background: "$grey_500",
          pointerEvents: "none",
        },
      },
    },
    wd: {
      true: {
        width: "100%",
      },
    },
  },
});

export const ButtonBody = StyledButtonBody;
