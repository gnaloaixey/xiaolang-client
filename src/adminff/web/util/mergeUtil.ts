import StateBuilder from "./StateBuilder";

/**
 * obj_two > obj_one
 * @param obj_one
 * @param obj_two
 */
function iteration(obj_one: any, obj_two: any): void {
	for (const key in obj_two) {
		if (Object.prototype.hasOwnProperty.call(obj_two, key)) {
			let state = new StateBuilder()
				.build(typeof obj_one[key] === "object")
				.build(typeof obj_two[key] === "object")
				.getState();
			switch (state.toString(2)) {
				case "11":
					iteration(obj_one[key], obj_two[key]);
					break;
				case "1":
					obj_one[key] = Object.create(null);
					iteration(obj_one[key], obj_two[key]);
					break;
				case "10" || "0":
					break;
				default:
					obj_one[key] = obj_two[key];
					break;
			}
		}
	}
}
/**
 * 传入一个对象时为深拷贝,多个对象合并拷贝，后者覆盖前者
 * @param objs 多个对象
 * @returns obj
 */
export default function <T>(...objs: T[]): T {
	let newObj = Object.create(null);
	objs.forEach((el) => {
		if (!el || typeof el !== "object") throw Error("参数错误");
		iteration(newObj, el);
	});
	return newObj as T;
}
