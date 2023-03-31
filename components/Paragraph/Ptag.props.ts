import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "p1" | "p2" | "p3" | "none";
  children: ReactNode;
}
