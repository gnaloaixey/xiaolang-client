<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<style lang="scss" scoped>
.el-container {
	height: 100%;
}
.el-header {
	height: 45px;
	background-color: #545c64;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	line-height: 45px;
}

.el-aside {
	background-color: #545c64;
	color: #fff;
	text-align: center;
	// line-height: 200px;
	.el-menu {
		height: 100%;
	}
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
