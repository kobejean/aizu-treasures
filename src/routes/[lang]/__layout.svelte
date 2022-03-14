<script>
  import { t, locales, locale } from '$lib/translations';
  import { page } from '$app/stores'
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';

  const count = writable(2);

  $: ({ route } = $page.stuff);
</script>

<a href="/{$locale}">{$t('menu.home')}</a>
<a href="/{$locale}/about">{$t('menu.about')}</a>
<select on:change="{({ target }) => goto(target.value)}">
  {#each $locales as lc}
    <option value="/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
  {/each}
</select>
<hr />
<slot />
<br />