<script>
    import { t } from '$lib/translations'

    export let title
    export let date
</script>

<svelte:head>
  <title>{$t('shared.site-name')} - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<header>
    <h1>{title}</h1>
    <p>Published: {date}</p>
</header>

<div id="post-content">
    <slot />
</div>