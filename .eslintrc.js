const fs = require("fs");
const data = fs.readFileSync("./.prettierrc", "utf-8");
const prettierrc = JSON.parse(data);
module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"plugin:vue/essential",
		"@vue/prettier",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier/@typescript-eslint",
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: "@typescript-eslint/parser",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-unused-vars": "off",
		"no-undef": "off",
		"no-mixed-spaces-and-tabs": "off",
		"prefer-const": "off",
		"require-yield": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"vue/no-use-v-if-with-v-for": "off",
		"vue/no-v-model-argument": "off",
		"prettier/prettier": ["warn", prettierrc],
	},
};
