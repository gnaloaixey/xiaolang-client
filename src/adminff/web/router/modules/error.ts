import { RouteRecordRaw } from "vue-router";
let error: RouteRecordRaw[] = [
	{
		path: "/inDevelopment",
		component: () => import("@web/views/error-page/inDevelopment.vue"),
		meta: {
			__title: "inDevelopment",
		},
	},
	{
		path: "/403",
		component: () => import("@web/views/error-page/403.vue"),
		meta: {
			__title: "403",
		},
	},
	{
		path: "/404",
		component: () => import("@web/views/error-page/404.vue"),
		meta: {
			__title: "404",
		},
	},
	{
		path: "/500",
		component: () => import("@web/views/error-page/500.vue"),
		meta: {
			__title: "500",
		},
	},
];
export default error;
