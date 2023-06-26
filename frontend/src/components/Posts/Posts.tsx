import { ClientApi } from "@/lib/api/api";
import {
  PostEntity,
  PostEntityResponseCollection,
} from "@/lib/strapi/interface/__generated__/graphql";
import { getFormattedDate } from "@/lib/utils/date";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function PostCard(summary: PostEntity) {
  const formattedDate = summary.attributes?.published
    ? getFormattedDate(summary.attributes?.published)
    : null;
  return (
    <Link href={`/posts/${summary.attributes?.slug}`}>
      {formattedDate && <time>{formattedDate}</time>}
      <h2 className="py-2 text-2xl font-medium">{summary.attributes?.title}</h2>
      <p className="text-base">{summary.attributes?.excerpt}</p>
    </Link>
  );
}

export default function Posts({
  postsCollection,
}: {
  postsCollection: PostEntityResponseCollection;
}) {
  const [posts, setPosts] = useState(postsCollection.data);
  const [pagination, setPagination] = useState(postsCollection.meta.pagination);
  const [offset, setOffset] = useState(0);
  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      ClientApi.getBlogPostsListing({
        pagination: {
          start: offset,
        },
      }).then((data) => {
        if (data.posts?.data && data.posts.data.length > 0) {
          setPosts((oldState) => {
            if (data.posts?.data) {
              return [...oldState, ...data.posts.data];
            }
            return [...oldState];
          });
          setPagination(data.posts.meta.pagination);
        }
      });
    } else {
      notInitialRender.current = true;
    }
  }, [offset]);
  console.log("posts: ", posts);
  return (
    <div>
      <h1 className="pb-6 md:pb-10 uppercase md:text-center">Latest posts</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li
              key={encodeURIComponent(post.id ?? "")}
              className="py-6 border-solid border-t"
            >
              <PostCard {...post} />
            </li>
          ))}
      </ul>
      {pagination.pageCount > pagination.page && (
        <div>
          <button
            className="block mx-auto p-2 uppercase mt-auto"
            onClick={(e) => {
              e.preventDefault();
              setOffset((oldState) => oldState + 1);
            }}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
