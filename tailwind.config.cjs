const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['pastel', 'night']
	},

	plugins: [daisyui]
};

module.exports = config;
