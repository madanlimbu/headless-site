import { ReactElement, useEffect } from "react";
import hljs from "highlight.js";
import { marked } from "marked";

export default function MarkedText({ text }: { text: string }): ReactElement {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    />
  );
}
