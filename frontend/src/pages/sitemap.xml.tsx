import { ClientApi } from "@/lib/api/api";
import { GetServerSideProps } from "next";

async function generateSiteMap() {
  // const public_domain = process.env.PUBLIC_DOMAIN;
  const public_domain = "www.madanlimbu.com";
  const site_url = `https://${public_domain}`;
  const data = await ClientApi.getBlogPostsListing({
    pagination: {
      limit: -1,
    },
  });
  const latest_post = data.posts?.data[0].attributes?.published;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${site_url}</loc>
        <changefreq>daily</changefreq>
      </url>
      <url>
        <loc>${site_url}/posts</loc>
        <changefreq>daily</changefreq>
      </url>
      <url>
        <loc>${site_url}/about</loc>
      </url>
      ${data.posts?.data
        .map((post) => {
          return `
        <url>
        <loc>${site_url}/${post.attributes?.slug}</loc>
        ${
          post.attributes?.published
            ? `<lastmod>${post.attributes?.published}</lastmod>`
            : `<lastmod>${latest_post}</lastmod>`
        }
        </url>
        `;
        })
        .join("")}
    </urlset>
   `;
}

function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = await generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default SiteMap;
