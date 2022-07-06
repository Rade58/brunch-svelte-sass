import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// THIS IS ADAPTER WE ARE IMPORTING
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// INSTEAD OF THIS
		// adapter: adapter(),
		// WE WILL USE THIS ADAPTER
		adapter: node(),

		// HERE WE CAN SET UP PATH ALIASES
		vite() {
			return {
				resolve: {
					alias: {
						// LETS ADD THO ALIASES FOR
						// ONE FOR /src/util
						// OTHER FOR /src/components

						$util: path.resolve('./src/util'),
						$components: path.resolve('./src/components'),
						$stores: path.resolve('./src/stores')
					}
				}
			};
		}
	}
};

export default config;
