/**
 * author: vnesting-frame
 * handle 路由信息
 * @returns router
 */
import { RouteRecordRaw } from "vue-router";
/* ----------code-between-these-two-lines---------- */
let router: RouteRecordRaw[] = [
	{
		path: "/example",
		meta: {
			__title: "example",
			keepAlive: true,
		},
		component: () => import("@/views/example.vue"),
	},
];
/* -----------------------end---------------------- */

export default router;
