import { ReactElement, useEffect } from "react";
import hljs from "highlight.js";

export default function RichText({ text }: { text: string }): ReactElement {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
