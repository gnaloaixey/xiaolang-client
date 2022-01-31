import xl from "@/util/xl";
declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$xl: typeof xl;
	}
}
