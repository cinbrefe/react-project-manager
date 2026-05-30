/** @type {import('tailwindcss').Config} */

export default {
	content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			// Warm neutral palette.
			colors: {
				// Surfaces
				app:				'var(--color-app)',
				card:				'var(--color-card)',
				sidebar:			'var(--color-sidebar)',
				// Ink / text
				ink:				'var(--color-ink)',
				'ink-soft':			'var(--color-ink-soft)',
				'ink-faint':		'var(--color-ink-faint)',
				line:				'var(--color-line)',
				// Accents
				accent:				'var(--color-accent)',
				highlight:			'var(--color-highlight)',
				'highlight-soft':	'var(--color-highlight-soft)',
				// Status
				done:				'var(--color-done)',
				'done-soft':		'var(--color-done-soft)',
				soon:				'var(--color-soon)',
				'soon-soft':		'var(--color-soon-soft)',
				'soon-ink':			'var(--color-soon-ink)',
				overdue:			'var(--color-overdue)',
				'overdue-soft':		'var(--color-overdue-soft)',
				'overdue-ink':		'var(--color-overdue-ink)',
			},
			fontFamily: {
				sans: ['Inter Variable', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};