/**
 * author: vnesting-frame
 * handle 路由信息
 * @returns router
 */
import { RouteRecordRaw } from "vue-router";
/* ----------code-between-these-two-lines---------- */
let route: RouteRecordRaw[] = [
	{
		path: "/",
		meta: {
			__title: "welcome",
			keepAlive: true,
		},
		component: () => import("@/views/welcome.vue"),
	},
];
/* -----------------------end---------------------- */
export default route;
