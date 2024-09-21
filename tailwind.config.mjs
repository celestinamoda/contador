/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				celestina: ['Herr Von Muellerhoff'],
			  },
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
		  addBase({
			'@font-face': {
				fontFamily: 'Herr Von Muellerhoff',
				fontWeight: '400',
				src: 'url(/src/assets/fonts/HerrVonMuellerhoff-Regular.ttf) format("truetype")',
			}
		  })
		}),
	  ],
	}
