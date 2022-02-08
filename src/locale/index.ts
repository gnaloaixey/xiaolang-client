import { I18nOptions } from "vue-i18n";
import enLocale from "./lang/en";
import zhLocale from "./lang/zh";
const messages = {
	en: {
		...enLocale,
	},
	zh: {
		...zhLocale,
	},
	tw: {},
};
const config: I18nOptions = {
	messages,
};
export default config;
