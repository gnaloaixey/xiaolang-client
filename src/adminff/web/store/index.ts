import { createStore } from "vuex";

import defaultte from "./modules/default";
import modules from "@/store";
export default createStore({
	modules: {
		defaultte,
		...modules,
	},
});
