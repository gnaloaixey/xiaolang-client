import i18n from "@web/locale";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import routes from "./route";
import routerHandle from "@/router";
let router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});
// 获取页面权限列表

// 路由守卫
router.beforeEach((to, from, next) => {
	// 为路由设置标题 __title 为 i18n 字段
	if (to?.meta?.__title) document.title = i18n.global.t(to.meta.__title as string);
	if (import.meta.env.PROD) {
		// 生产环境路由守卫
	}
	next();
	// to and from are both route objects. must call `next`.
});
router = routerHandle(router);
export default router;
