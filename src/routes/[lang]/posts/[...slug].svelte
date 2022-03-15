<script context="module">
    export async function load({ params }) {
        // Must be relative import, see: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
        const Post = (await import(`../../../posts/${params.slug}/${params.lang}.md`)).default;

        return { props: { Post } }
    }
</script>

<script>
    export let Post;
</script>

<svelte:component this={Post} />