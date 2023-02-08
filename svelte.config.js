import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		prerender: { entries: [] }
	},
	root: 'src',
	build: {
		outDir: '../dist'
	}
};
