import "@vue/runtime-core";
import IVnSystem from "../web/util/VnSystemUtil/interface";
import { Store, State } from "vuex";
import { AxiosInstance } from "axios";
import { I18n } from "vue-i18n";
import { Router, RouteComponent } from "vue-router";
declare module "@vue/runtime-core" {
	export interface ComponentCustomProperties {
		$vn: IVnSystem;
		$http: AxiosInstance;
		$store: Store<State>;
		$router: Router;
		$route: RouteComponent;
		$t;
		$i18n: I18n;
	}
}
