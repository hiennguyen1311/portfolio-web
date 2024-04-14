import { I18n, Scope, TranslateOptions } from "i18n-js";
import * as en from "./en.json";
import * as vi from "./vi.json";
import { get } from "../utils/object";
const locales = "vi";
const i18n = new I18n();
i18n.locale = get(locales[0], "languageCode", "vi");
i18n.enableFallback = true;
i18n.translations = { en };
i18n.missingTranslation.register("empty", (i18n, scope, options) =>
	i18n.t("GLOBAL.MISSING_TRANSLATION")
);

export interface Options extends TranslateOptions {
	warning?: boolean;
	appName?: string;
	key?: string;
	currency?: string;
	nutCount?: number;
	nuts?: number;
}
export const translate = (scope: Scope, options?: Options) => {
	let header = "";
	if (options && options.warning) {
		header = i18n.t("ERROR.WARNING_SYMBOL");
	}
	if (options && options.key) {
		scope = `${options.key}.${scope}`;
	}
	return `${header}${i18n.translate(scope, {
		...options,
	})}`;
};

i18n.t = translate;

export const setI18nConfig = async (lang: string) => {
	let language = en;
	switch (lang) {
		case "vi":
			language = vi;
			i18n.translations = { vi: language };
			break;
		default: {
			language = vi;
			i18n.translations = { vi: language };
			break;
		}
	}
	i18n.locale = lang || "vi";
};

export default i18n as I18n;
