<script>
  import { t, locale } from '$lib/translations'
	import { page } from '$app/stores'

  function getCurrent(route) {
    if (route === '' || route === '/') return 'home'
    return route.split('/')[1]
  }

  $: current = getCurrent($page.stuff.route)
</script>
<ul data-test="navigation-items">
  <li data-test="home">
    <a
      class="btn"
      sapper:prefetch={true}
      aria-current={current === 'home' ? 'page' : undefined}
      href="/{$locale}"
    >
      {$t('menu.home')}
    </a>
  </li>
  <li data-test={'about'}>
    <a
      class="btn"
      sapper:prefetch={true}
      aria-current={current === 'about' ? 'page' : undefined}
      href={`/${$locale}/about`}
    >
      {$t('menu.about')}
    </a>
  </li>
</ul>

<style lang="scss">

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    // display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: $primary;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
