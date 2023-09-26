import { Button } from "@mui/material";
import { ReactNode } from "react";

export default function HomeButton({
  link,
  children,
  newTab,
}: {
  newTab?: boolean;
  link: string;
  children: ReactNode;
}) {
  return (
    <Button
      size="large"
      variant="contained"
      href={link}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </Button>
  );
}
