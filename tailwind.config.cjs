const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['night', 'lofi']
	},

	plugins: [daisyui]
};

module.exports = config;
