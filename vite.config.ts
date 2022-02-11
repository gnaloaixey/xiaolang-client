import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";
import prism from "markdown-it-prism";
import anchor from "markdown-it-anchor";
import copy from "rollup-plugin-copy";
import { EsLinter, linterPlugin } from "vite-plugin-linter";
// https://vitejs.dev/config/
export default defineConfig({
	// vue插件，vnesting插件
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		markdown({
			markdownItUses: [anchor, prism],
		}),
		copy({
			hook: "closeBundle",
			targets: [{ src: "./profiles/resources/*", dest: "./dist/profiles" }],
		}),
		linterPlugin({
			include: ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.vue"],
			linters: [
				new EsLinter({
					configEnv: { command: "serve", mode: "development" },
					serveOptions: { clearCacheOnStart: true, fix: true },
				}),
			],
		}),

		// {
		// 	...vnestingServerMiddlewares({}),
		// 	apply: "serve",
		// },
	],
	base: "./",
	resolve: {
		alias: {
			"@/": "/src/", // 切勿更改
			"@web/": "/src/core/web/", // 切勿更改
		},
	},
	build: {
		// target: "esnext",
		assetsInlineLimit: 102400,
		cssCodeSplit: false,
		outDir: "./dist",
	},
	server: {
		port: 9087,
		proxy: {
			/**
			 * 后台服务 , 准备阶段就可以将系统管理模块运行到远程服务器了，也可以在本地运行
			 * 配套后台管理地址：https://github.com/vnesting/server.git
			 */
			"/api": {
				//本地服务接口地址
				target: "http://localhost:8080",
				ws: true,
				rewrite(p) {
					return p;
				},
			},
			/**
			 * 与vite plugins配置一致
			 */
			"/devServer": {
				//Dev服务接口地址
				target: "http://localhost:8080",
				ws: true,
				rewrite(p) {
					return p;
				},
			},
		},
	},
});
