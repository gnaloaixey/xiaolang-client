import { UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import merge from "utils-merge";
import vnestingConfig from "./src/vnesting-config";
import vnestingServerMiddlewares from "./src/core/plugin/vite-plugin-vnesting-server-middlewares";
// https://vitejs.dev/config/
export default merge<UserConfigExport, UserConfigExport, UserConfigExport>(
	{
		// vue插件，自定义插件
		plugins: [
			vue(),
			{
				...vnestingServerMiddlewares(),
				apply: "serve",
			},
		],
		resolve: {
			alias: {
				"@": "/src",
				"@server": "/src/server",
				"@web": "/src/web",
				"@core": "/src/core",
			},
		},
		build: {
			// target: "esnext",
			assetsInlineLimit: 102400,
			cssCodeSplit: false,
			outDir: "../resources/client",
		},
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
	},
	vnestingConfig.vite || {}
);
