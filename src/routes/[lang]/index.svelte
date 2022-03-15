<script context="module">
export const load = async ({ fetch, params }) => {
  const posts = await fetch(`/${params.lang}/posts.json`)
  const allPosts = await posts.json()
  return {
    props: {
      posts: allPosts
    }
  }
}
</script>

<script>
  import { t, locale } from '$lib/translations'; 
  export let posts
</script>

<svelte:head>
  <title>{$t('shared.site-name')}</title>
</svelte:head>

<h1>{$t('home.recent-posts')}</h1>
<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="{$locale}{post.route}">{post.meta.title}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>
