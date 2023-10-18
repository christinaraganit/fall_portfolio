export type Colors = {
  bg: string;
  bgHover: string;
  chip: string;
  chipHover: string;
};

type ColorKeys = "BLUE" | "ORANGE" | "INDIGO";

export const ProjectCardColors: { [key in ColorKeys]: Colors } = {
  BLUE: {
    bg: "bg-blue-600",
    bgHover: "hover:bg-blue-700",
    chip: "bg-blue-700",
    chipHover: "hover:bg-blue-800",
  },
  ORANGE: {
    bg: "bg-orange-500",
    bgHover: "hover:bg-orange-600",
    chip: "bg-orange-600",
    chipHover: "hover:bg-orange-700",
  },
  INDIGO: {
    bg: "bg-indigo-600",
    bgHover: "hover:bg-indigo-700",
    chip: "bg-indigo-700",
    chipHover: "hover:bg-indigo-800",
  },
};
