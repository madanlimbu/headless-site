import { ServerApi } from "@/lib/api/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await processApi(req);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function processApi(req: NextApiRequest) {
  const body = req.body;
  const fn = body?.fn;
  switch (fn) {
    case "getBlogPostsListing":
      return ServerApi.getBlogPostsListing(body.args);
      break;
    case "getSinglePostBySlug":
      return ServerApi.getSinglePostBySlug(body.args);
      break;
    default:
      throw Error(`Invalid function called on public api. fn: ${fn}`);
      break;
  }
}
