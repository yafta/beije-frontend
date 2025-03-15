import { ReactNode } from "react";

export type NavbarMenuItem = {
  id: string;
  name: string;
  content?: ReactNode;
  to?: string;
};
