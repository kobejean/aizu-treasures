import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  translations: {
    ja: { lang },
    en: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'menu',
      loader: async () => (await import('./en/menu.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'error',
      routes: ['error'],
      loader: async () => (await import('./en/error.json')).default,
    },
    {
      locale: 'ja',
      key: 'menu',
      loader: async () => (await import('./ja/menu.json')).default,
    },
    {
      locale: 'ja',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./ja/home.json')).default,
    },
    {
      locale: 'ja',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./ja/about.json')).default,
    },
    {
      locale: 'ja',
      key: 'error',
      routes: ['error'],
      loader: async () => (await import('./ja/error.json')).default,
    },
  ],
};

export const defaultLocale = 'ja';

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log('Loading translations...');

    await loading.toPromise();
    console.log('Updated translations', translations.get());
  }
});

locale.subscribe(($locale) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute("lang", $locale);
  }
});