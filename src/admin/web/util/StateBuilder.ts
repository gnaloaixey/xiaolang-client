export default class StateBuilder {
	private state = 0;
	build(bool: boolean) {
		this.state <<= 1;
		if (bool) this.state++;
		return this;
	}
	getState() {
		return this.state;
	}
}
