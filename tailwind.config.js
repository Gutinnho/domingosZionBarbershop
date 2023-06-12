/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				neutral: {
					800: '#202020',
				},
				blue: {
					900: '#2B488A',
				},
			},
			dropShadow: {
				custom: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
};

