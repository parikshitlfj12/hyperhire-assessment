import React, { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode | string;
};

export default function Typography({ className, children }: Props) {
  return <p className={`${className}`}>{children}</p>;
}
