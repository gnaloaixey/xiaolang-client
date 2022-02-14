/**
 * auther 小朗
 * 2021.3.21
 * 用户名
 * @param rule 验证规则（不含特殊字符）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateUsername = (rule: any, value: any, callback: any) => {
	let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;
	setTimeout(() => {
		if (value.length > 16) {
			callback(new Error("长度不能超过16个字符"));
		} else if (!reg.test(value)) {
			callback(new Error("仅支持大小写英文、中文和下划线_"));
		} else {
			callback();
		}
	}, 600);
};

/**
 * auther 小朗
 * 2021.3.21
 * 密码格式验证
 * @param rule 验证规则（不少于6位）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validatePassword = (rule: any, value: any, callback: any) => {
	setTimeout(() => {
		if (value.length < 6) {
			callback(new Error("密码长度不得小于6位"));
		} else {
			callback();
		}
	}, 600);
};

/**
 * auther 小朗
 * 2021.3.21
 * 手机号码格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateMobile = (rule: any, value: any, callback: any) => {
	let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (!reg.test(value)) {
		callback(new Error("手机号格式错误"));
	} else {
		callback();
	}
};

/**
 * auther 小朗
 * 2021.3.21
 * 身份证号码格式验证
 * @param rule 验证规则（是否满足18位）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateIDCard = (rule: any, value: any, callback: any) => {
	const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	if (!reg.test(value)) {
		callback(new Error("身份证号码格式错误"));
	} else {
		callback();
	}
};
