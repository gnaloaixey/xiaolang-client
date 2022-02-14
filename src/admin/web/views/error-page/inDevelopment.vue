<template>
	<div class="error-page">
		<div class="img"></div>
		<div class="content">
			<h1>In Development</h1>
			<div class="desc">抱歉，该功能还没有上线</div>
			<div class="actions">
				<router-link :to="{ path: '/' }">
					<el-button type="primary">返回首页</el-button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "error-500",
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
.img {
	background-image: url("./img/in-development.jpg");
	background-repeat: no-repeat;
}
</style>
