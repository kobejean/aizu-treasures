<script context="module">
    import { POST_COMPONENTS } from '$lib/utils/posts.js'
    
    export async function load({ params }) {
        const path = `/src/posts/${params.slug}/${params.lang}.md`;
        const resource = POST_COMPONENTS[params.lang]?.[path];

        if (!resource) return { status: 404 };
        
        const Post = (await resource()).default;
        return { props: { Post } }
    }
</script>

<script>
    export let Post;
</script>

<svelte:component this={Post} />