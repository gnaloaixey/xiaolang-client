import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { EsLinter, linterPlugin } from "vite-plugin-linter";
// https://vitejs.dev/config/
export default defineConfig({
	// vue插件，vnesting插件
	plugins: [
		vue(),
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
