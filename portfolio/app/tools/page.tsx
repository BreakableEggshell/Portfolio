import type { Metadata } from "next";
import { leftColumn, rightColumn } from "./tools-data";
import { ToolsBrowser } from "./tools-browser";

export const metadata: Metadata = {
  title: "Tools & techstacks | Tricia Gubaton",
};

export default function Tools() {
  return <ToolsBrowser left={leftColumn} right={rightColumn} />;
}
