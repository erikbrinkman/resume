import { Metadata } from "next";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Erik Brinkman",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
