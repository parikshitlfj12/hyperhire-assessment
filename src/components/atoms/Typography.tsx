import React from "react";
import { TypographyProps } from "./interface";

export default function Typography({ className, children }: TypographyProps) {
  return <p className={`${className}`}>{children}</p>;
}
