import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import jestDom from "eslint-plugin-jest-dom";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import testingLibrary from "eslint-plugin-testing-library";

export default defineConfig([
	{
		...js.configs.recommended,
		...react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
		...react.configs.flat["jsx-runtime"], // Add this if you are using React 17+
		...jest.configs["flat/recommended"],
		...jestDom.configs["flat/recommended"],
		...eslintConfigPrettier,
		// Note: The Prettier config must be the last one in the list to override other formatting rules.

		plugins: {
			react,
			jest,
			"jest-dom": jestDom,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.mocha,
				...jest.environments.globals.globals,
				dg: true,
			},

			parser: babelParser,
			ecmaVersion: 5,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
					modules: true,
				},

				requireConfigFile: false,

				babelOptions: {
					presets: ["@babel/preset-react"],
				},
			},
		},

		settings: {
			react: {
				version: "18",
			},
		},

		rules: {
			"block-scoped-var": ["warn"],
			camelcase: ["warn"],
			"constructor-super": ["error"],
			curly: ["error", "all"],
			"default-case": ["error"],
			"dot-notation": ["error"],
			eqeqeq: ["error"],
			"func-style": ["error", "expression"],
			"linebreak-style": 0,
			"lines-between-class-members": ["error"],
			"new-cap": 0,
			"newline-before-return": ["error"],
			"no-alert": ["error"],

			"no-console": [
				"warn",
				{
					allow: ["warn", "error"],
				},
			],

			"no-const-assign": ["error"],
			"no-dupe-class-members": ["error"],
			"no-duplicate-imports": ["error"],
			"no-empty-function": ["error"],
			"no-eval": ["error"],
			"no-inner-declarations": 0,
			"no-invalid-regexp": ["error"],
			"no-irregular-whitespace": ["error"],
			"no-lonely-if": ["error"],
			"no-redeclare": ["warn"],
			"no-this-before-super": ["warn"],
			"no-undef": ["error"],
			"no-undef-init": ["error"],
			"no-unneeded-ternary": ["error"],
			"no-unreachable": ["error"],
			"no-unused-vars": ["warn"],
			"no-useless-constructor": ["error"],
			"no-useless-rename": ["error"],
			"no-useless-return": ["error"],
			"no-var": ["error"],

			"object-shorthand": [
				"error",
				"always",
				{
					avoidExplicitReturnArrows: true,
				},
			],

			"one-var": ["error", "never"],

			"padding-line-between-statements": [
				"error",
				{
					blankLine: "always",
					prev: "*",

					next: [
						"class",
						"const",
						"block",
						"block-like",
						"break",
						"export",
						"expression",
						"do",
						"for",
						"function",
						"if",
						"import",
						"let",
						"return",
						"switch",
						"try",
						"while",
					],
				},
				{
					blankLine: "always",

					prev: [
						"class",
						"const",
						"block",
						"block-like",
						"break",
						"export",
						"expression",
						"do",
						"for",
						"function",
						"if",
						"import",
						"let",
						"return",
						"switch",
						"try",
						"while",
					],

					next: "*",
				},
				{
					blankLine: "any",
					prev: "expression",
					next: "expression",
				},
				{
					blankLine: "any",
					prev: "import",
					next: "import",
				},
				{
					blankLine: "any",
					prev: ["let", "const"],
					next: ["let", "const"],
				},
			],

			"prefer-arrow-callback": ["error"],
			"prefer-const": ["error"],

			"prefer-destructuring": [
				"error",
				{
					array: false,
				},
			],

			"prefer-object-spread": ["error"],
			"prefer-spread": ["warn"],
			"prefer-template": ["error"],
			quotes: 0,
			"react/prop-types": 0,
			semi: 0,
			"spaced-comment": ["error"],
			"jest-dom/prefer-checked": "error",
			"jest-dom/prefer-enabled-disabled": "error",
			"jest-dom/prefer-required": "error",
			"jest-dom/prefer-to-have-attribute": "error",
		},
	},
	{
		files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
		ignores: ["**/*.e2e.spec.js"],
		...testingLibrary.configs["flat/react"],
	},
	{
		ignores: ["node_modules/", "dist/", "**/.*"],
	},
]);
