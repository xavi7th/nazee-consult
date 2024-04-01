import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

    alias: {
      '$vendor': '/src/vendor',
    },

    prerender: {
      //@see https://kit.svelte.dev/docs/configuration#prerender
      handleMissingId: ({ path, referrers, message, id }) => {

        if (id === '/') return;

        console.log({ path, referrers, message, id });

				throw new Error(message);
			},

      //@see https://kit.svelte.dev/docs/configuration#prerender
      handleHttpError: ({ referenceType, path, referrer, message, status }) => {

        if (path === '/wa.me/447311035016') return;

        console.log({ referenceType, path, referrer, message, status, eq: path === '/wa.me/447311035016' });

        throw new Error(message);
			}
		}
	},

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
  preprocess: [vitePreprocess()],
};

export default config;
