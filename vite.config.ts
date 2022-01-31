import { defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import vnestingServerMiddlewares from "./src/core/plugin/vite-plugin-vnesting-server-middlewares";
// https://vitejs.dev/config/
export default defineConfig({
	// vue插件，vnesting插件
	plugins: [
		vue(),
		// {
		// 	...vnestingServerMiddlewares({}),
		// 	apply: "serve",
		// },
	],
	resolve: {
		alias: {
			"@": "/src",
			"@web": "/src/core/web",
		},
	},
	build: {
		// target: "esnext",
		assetsInlineLimit: 102400,
		cssCodeSplit: false,
		outDir: "./dist",
	},
	publicDir: "src/public",
	server: {
		port: 9087,
		proxy: {
			"/api": {
				//本地服务接口地址
				target: "http://localhost:8080",
				ws: true,
				rewrite(p) {
					return p;
				},
			},
		},
	},
});
