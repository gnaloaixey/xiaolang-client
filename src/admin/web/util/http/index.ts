import { Axios } from "axios";
import qs from "qs";
import router from "@web/router";
import { App, provide } from "vue";

let http = new Axios({
	baseURL: import.meta.env.BASE_URL,
	timeout: 5000,
	withCredentials: false,
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
		"Access-Control-Allow-Origin-Type": "*",
	},
});

// 请求拦截器
http.interceptors.request.use(
	function (config) {
		if (config.method === "post" || config.method === "put" || config.method === "delete") {
			// qs序列化
			config.data = qs.parse(config.data);
		}
		// 鉴权token
		// if (storage.get(store.state.Roles)) {
		// 	store.state.Roles;
		// 	config.headers.Authorization = storage.get(store.state.Roles);
		// }
		return config;
	},
	(error) => {
		// message.error(error.data.error.message);
		return Promise.reject(error.data.error.message);
	}
);

// 响应拦截器
http.interceptors.response.use(
	function (config) {
		if (config.status === 200 || config.status === 204) {
			return Promise.resolve(config);
		} else {
			return Promise.reject(config);
		}
	},
	function (error) {
		if (error.response.status) {
			switch (error.response.status) {
				case 400:
					// message.error("发出的请求有错误，服务器没有进行新建或修改数据的操作==>" + error.response.status);
					break;
				case 301 || 302: //重定向
					// message.error("token:登录失效==>" + error.response.status + ":" + store.state.Roles);
					// storage.remove(store.state.Roles);
					// storage.get(store.state.Roles);
					router.replace({
						path: "/Login",
					});
					break;
				// 403 token过期
				// 登录过期对用户进行提示
				// 清除本地token和清空vuex中token对象
				// 跳转登录页面
				case 403:
					// message.error("用户得到授权，但是访问是被禁止的==>" + error.response.status);
					break;
				case 404:
					// message.error("网络请求不存在==>" + error.response.status);
					break;
				case 406:
					// message.error("请求的格式不可得==>" + error.response.status);
					break;
				case 410:
					// message.error("请求的资源被永久删除，且不会再得到的==>" + error.response.status);
					break;
				case 422:
					// message.error("当创建一个对象时，发生一个验证错误==>" + error.response.status);
					break;
				case 500:
					// message.error("服务器发生错误，请检查服务器==>" + error.response.status);
					break;
				case 502:
					// message.error("网关错误==>" + error.response.status);
					break;
				case 503:
					// message.error("服务不可用，服务器暂时过载或维护==>" + error.response.status);
					break;
				case 504:
					// message.error("网关超时==>" + error.response.status);
					break;
				default:
				// message.error("其他错误错误==>" + error.response.status);
			}
			return Promise.reject(error.response);
		} else {
			// 处理断网的情况
			// eg:请求超时或断网时，更新state的network状态
			// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
			// 关于断网组件中的刷新重新获取数据，会在断网组件中说明
			// store.commit("changeNetwork", false);
		}
	}
);
export default {
	install: (app: App<Element>) => {
		app.provide("$http", http);
		app.config.globalProperties.$http = http;
	},
};
export { http };
