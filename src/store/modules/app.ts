import { createStore } from "vuex";
export default createStore({
	state: {
		menuData: [], //主页菜单
		defScrollOps: {
			vuescroll: {
				detectResize: true,
			},
			scrollPanel: {
				scrollingX: false,
				scrollingY: true,
				speed: 300,
				easingL: "easeInQuart",
			},
			rail: {
				background: "#fff",
				opacity: 0,
				size: "4px",
				specifyBorderRadius: false,
				gutterOfEnds: null, //轨道距 x 和 y 轴两端的距离
				gutterOfSide: "0", //距离容器的距离
				keepShow: false, //是否即使 bar 不存在的情况下也保持显示
				border: "none", //边框
			},
			bar: {
				hoverStyle: true,
				onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
				background: "#909399", //颜色
			},
		},
	},
	getters: {
		// getMenuData(state) {
		// 	return state.menuData;
		// },
		// getDefScrollOps(state) {
		// 	return state.defScrollOps;
		// },
	},
	mutations: {
		setMenuData(state, value) {
			state["menuData"] = value;
		},
	},
});
