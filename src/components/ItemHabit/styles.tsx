import { styled } from "../../styles/stitches.config";

import * as HoverCard from "@radix-ui/react-hover-card";
import * as Progress from "@radix-ui/react-progress";

const StyleItemTrigger = styled(HoverCard.Trigger, {
  width: "4rem",
  height: "4rem",
  borderRadius: "0.8rem",
  transition: "all 0.3s ease-in",
  "&:hover": {
    boxShadow: "0rem 0.8rem 1.6rem hsla(255, 92%, 76%, 0.8)",
  },

  variants: {
    status: {
      empty: {
        background: "$grey_600",
        border: "0.2rem solid $grey_500",
      },
      initial: {
        background: "$violet_600",
        border: "0.2rem solid $violet_400",
      },
      running: {
        background: "$violet_400",
        border: "0.2rem solid $violet_200",
      },
      progress: {
        background: "$violet_300",
        border: "0.2rem solid $violet_200",
      },
      done: {
        background: "$violet_200",
        border: "0.2rem solid $violet_100",
      },
    },
  },
});

const StyleItemContent = styled(HoverCard.Content, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "3.2rem",
  gap: "3.2rem",
  width: "40rem",
  height: "fit-content",
  maxHeight: "40rem",
  background: "$grey_600",
  boxShadow: "0.4rem 1.6rem 2.4rem rgba(167, 139, 250, 0.08)",
  borderRadius: "1.6rem",
  ".habit_infor": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.6rem",
    width: "100%",
    ".title": {
      h5: {
        color: "$grey_300",
      },
      h3: {
        color: "$white",
        marginTop: "0.8rem",
        fontWeight: "bold",
      },
    },
  },
  ".task_habit": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.6rem",
    width: "100%",
    maxHeight: "22.4rem",
    overflow: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "$violet_200",
    "&::-webkit-scrollbar": {
      width: "0.4rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "$violet_200",
      borderRadius: "2rem",
    },
  },
});

const StyleItemArrow = styled(HoverCard.Arrow, {
  width: "2.8rem",
  height: "1.6rem",
  fill: "$grey_600",
});

const StyledProgressRoot = styled(Progress.Root, {
  position: "relative",
  overflow: "hidden",
  background: "$grey_400",
  borderRadius: "50rem",
  width: "100%",
  height: "1.6rem",
});

const StyledProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: "$violet_300",
  height: "100%",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  variants: {
    status: {
      empty: {
        width: "0%",
      },
      initial: {
        width: "20%",
      },
      running: {
        width: "40%",
      },
      progress: {
        width: "60%",
      },
      done: {
        width: "100%",
      },
    },
  },
});

export const ItemRoot = HoverCard.Root;
export const ItemTrigger = StyleItemTrigger;
export const ItemContent = StyleItemContent;
export const ItemArrow = StyleItemArrow;
export const ProgressRoot = StyledProgressRoot;
export const ProgressIndicator = StyledProgressIndicator;
