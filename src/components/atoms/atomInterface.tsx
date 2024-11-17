import { ReactNode } from "react";

export type DropdownItem = {
  label: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  label: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export type TooltipProps = {
  text: string;
  icon?: string;
};

export type TypographyProps = {
  className: string;
  children: ReactNode | string;
};
