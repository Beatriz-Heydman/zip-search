export type FlexProps = {
  gap?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
};
