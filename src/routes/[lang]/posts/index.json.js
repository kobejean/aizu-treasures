import { getPostList } from '$lib/utils/posts.js'
const POST_LIST = getPostList();
export const get = async ({ params }) => {
  return {
    body: POST_LIST[params.lang]
  }
}