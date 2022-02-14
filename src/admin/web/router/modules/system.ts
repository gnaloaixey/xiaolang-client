import { RouteRecordRaw } from "vue-router";
let system: RouteRecordRaw[] = [
	{
		path: "user",
		component: () => import("@web/views/system/User.vue"),
		meta: {
			__title: "用户信息",
		},
	},
];
export default system;
