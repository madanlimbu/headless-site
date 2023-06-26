import Metadata from "@/components/Metadata/Metadata";
import RichText from "@/components/RichText/RichText";
import { ClientApi } from "@/lib/api/api";
import { PostEntity } from "@/lib/strapi/interface/__generated__/graphql";
import { getFormattedDate } from "@/lib/utils/date";

export default function Post(props: { data: PostEntity }) {
  const { attributes } = props.data;
  const formattedDate = attributes?.published
    ? getFormattedDate(attributes?.published)
    : null;
  return (
    <>
      <Metadata
        {...{
          title: `${attributes?.title} | Madan`,
          description: attributes?.excerpt ? attributes?.excerpt : "",
        }}
      />
      <div className="prose max-w-none">
        <header className="pb-4 mb-4 border-b">
          <h1>{attributes?.title}</h1>
          {formattedDate && <time>{formattedDate}</time>}
          <p className="mt-0 text-slate-700">{attributes?.excerpt}</p>
        </header>
        <section>
          {attributes?.body && <RichText text={attributes?.body} />}
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const data = await ClientApi.getSinglePostBySlug({
    slug: context.params.slug,
  });
  const post = data?.posts?.data[0];

  return {
    props: {
      data: post,
    },
  };
}
