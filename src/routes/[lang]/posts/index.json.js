const postsByLang = {
  ja: import.meta.globEager(`/src/posts/**/ja.md`),
  en: import.meta.globEager(`/src/posts/**/en.md`),
}

export const get = async ({ params }) => {
  const posts = Object.entries(postsByLang[params.lang])
    .map(([path, obj]) => {
      return {
        meta: obj.metadata,
        route: path.slice(4, -6), // get '/posts/**'
      }
    })
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

  return {
    body: posts
  }
}