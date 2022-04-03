<script context="module">
	import { loadTranslations, locale } from '$lib/translations';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => {
		const { pathname } = url;

		const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;

		const route = pathname.replace(new RegExp(`^/${lang}`), '');

		await loadTranslations(lang, route);

		locale.set(lang); // <== keep this just before the `return` – see https://github.com/sveltekit-i18n/lib/issues/32

		return { stuff: { route, lang } };
	};
</script>
<script>
	import NavigationBar from '$lib/components/navigation-bar/NavigationBar.svelte'
	import '../app.scss';
</script>

<header>
  <NavigationBar />
</header>

<slot />
