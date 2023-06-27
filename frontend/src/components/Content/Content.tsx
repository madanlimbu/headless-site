import { ReactElement, useEffect } from "react";
import RichText from "@/components/RichText/RichText";
import MarkedText from "@/components/MarkedText/MarkedText";
import { Maybe } from "@/lib/strapi/interface/__generated__/graphql";

export default function Content({
  body,
  markdown,
}: {
  body?: string | null;
  markdown?: string | null;
}): ReactElement {
  return (
    <section>
      {body && <RichText text={body} />}
      {markdown && <MarkedText text={markdown} />}
    </section>
  );
}
