export function easeInQuad(curtime: any, begin: any, end: any, duration: any) {
	let x = curtime / duration; //x值
	let y = x * x; //y值
	return begin + (end - begin) * y; //套入最初的公式
}
export function easeOutQuad(curtime: any, begin: any, end: any, duration: any) {
	let x = curtime / duration; //x值
	let y = -x * x + 2 * x; //y值
	return begin + (end - begin) * y; //套入最初的公式
}
export function easeInoutQuad(curtime: any, begin: any, end: any, duration: any) {
	if (curtime < duration / 2) {
		//前半段时间
		return easeInQuad(curtime, begin, (begin + end) / 2, duration / 2); //改变量和时间都除以2
	} else {
		let curtime1 = curtime - duration / 2; //注意时间要减去前半段时间
		let begin1 = (begin + end) / 2; //初始量要加上前半段已经完成的
		return easeOutQuad(curtime1, begin1, end, duration / 2); //改变量和时间都除以2
	}
}
