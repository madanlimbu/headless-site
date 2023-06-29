import { ReactElement, useEffect, useState } from "react";
import hljs from "highlight.js";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype/lib";
import rehypeStringify from "rehype-stringify/lib";
import rehypeMermaid from "rehype-mermaidjs";

export default function MarkedText({ text }: { text: string }): ReactElement {
  const [hast, setHast] = useState("");
  useEffect(() => {
    // mermaid.initialize({
    //   startOnLoad: false,
    // });
    // mermaid.run({ querySelector: ".language-mermaid" });
    markItUp(text).then((a) => {
      setHast(a.toString());
    });
  }, [text]);

  useEffect(() => {
    hljs.highlightAll();
  }, [hast]);

  // const md = new MarkdownIt();
  // const parsed_text = md.render(text);
  // const parsed_text = unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .process(text);

  const markItUp = async (text: string) => {
    return unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeMermaid)
      .use(rehypeStringify)
      .process(text);
  };

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: hast,
      }}
    />
  );
}
