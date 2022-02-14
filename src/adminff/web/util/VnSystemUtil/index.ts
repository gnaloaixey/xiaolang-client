import { App } from "vue";
import IVnSystem from "./interface";
import Msg from "./interface/Msg";

class VnSystemUtil implements IVnSystem {
	private vm: App<Element>;
	getMsg!: Msg;
	constructor(app: App<Element>) {
		this.vm = app;
	}
}
export default {
	install: (app: App<Element>) => {
		app.config.globalProperties.$vn = new VnSystemUtil(app);
	},
};
export { VnSystemUtil };
