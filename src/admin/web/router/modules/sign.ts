import { RouteRecordRaw } from "vue-router";
let sign: RouteRecordRaw[] = [
	{
		path: "/login",
		component: () => import("@web/views/sign/Login.vue"),
	},
	{
		path: "/register",
		component: () => import("@web/views/sign/Register.vue"),
	},
];
export default sign;
