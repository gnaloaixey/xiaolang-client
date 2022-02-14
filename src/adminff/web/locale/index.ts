import { createI18n, I18nOptions } from "vue-i18n";
import enLocale from "./lang/en";
import zhLocale from "./lang/zh";
import config from "@/locale";
import merge from "@web/util/mergeUtil";

let coreConfig: I18nOptions = {
	locale: "zh",
	messages: {
		en: {
			...enLocale,
		},
		zh: {
			...zhLocale,
		},
		tw: {},
	},
};
export default createI18n(merge(coreConfig, config));
