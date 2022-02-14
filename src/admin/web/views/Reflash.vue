<template>
	<div></div>
</template>

<script>
export default {
	data() {
		return {};
	},
	created() {
		this.$router.push(this.$route.query.path);
	},
};
</script>
