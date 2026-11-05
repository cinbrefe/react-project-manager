import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: { react: reactPlugin, 'jsx-a11y': jsxA11y },
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			globals: globals.browser,
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		settings: { react: { version: 'detect' } },
		rules: {
			...reactPlugin.configs.flat.recommended.rules,
			...reactPlugin.configs.flat['jsx-runtime'].rules,
			...jsxA11y.flatConfigs.recommended.rules,
			'react/prop-types': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
		},
	},
	{ files: ['*.config.js'], languageOptions: { globals: globals.node } },
	prettier,
]);
