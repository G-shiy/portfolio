import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleMissingId: 'fail'
		},
		paths: {
			base: process.env.PAGES_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/portfolio' : '')
		}
	}
};

export default config;