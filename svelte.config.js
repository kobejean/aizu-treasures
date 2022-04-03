import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	},

	extensions: ['.md', '.svelte'],

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				posts: path.resolve('./src/posts/__layout.svelte')
			}
		})
	]
};

export default config;
