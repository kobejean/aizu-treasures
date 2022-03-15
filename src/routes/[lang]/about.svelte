<script>
  import { t } from '$lib/translations'; 
</script>

<svelte:head>
  <title>{$t('about.title')}</title>
</svelte:head>

<h1>{$t('about.title')}</h1>
<p>{@html $t('about.text')}</p>
