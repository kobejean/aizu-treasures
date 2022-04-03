export const POST_COMPONENTS = {
  ja: import.meta.glob(`/src/posts/**/ja.md`),
  en: import.meta.glob(`/src/posts/**/en.md`),
};


export function getPostList() {
    const POSTS = {
      ja: import.meta.globEager(`/src/posts/**/ja.md`),
      en: import.meta.globEager(`/src/posts/**/en.md`),
    };
    
    function getSummary(html){
        return html.replace(/<[^>]+>/g, '')
    }
    const list = {};
    Object.keys(POSTS).forEach(lang => {
        list[lang] = Object.entries(POSTS[lang])
            .map(([path, obj]) => {
                const { html } = obj.default.render()
                const summary = getSummary(html)
                return {
                    meta: obj.metadata,
                    summary,
                    route: path.slice(4, -6), // get '/posts/**'
                }
            })
            .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
    });
    return list;
}