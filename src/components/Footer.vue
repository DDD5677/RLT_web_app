<template>
	<div class="footer">
		<div class="box"></div>
		<span class="close-btn"></span>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer {
	padding: 18px 68px 18px 18px;
	border-radius: 12px;
	border: 1px solid #4D4D4D;
	position: relative;
	background-color: #262626;

	.box {
		height: 36px;
		background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
		border-radius: 12px;
	}

	.close-btn {
		display: inline-block;
		position: absolute;
		right: 8px;
		top: 8px;
		width: 24px;
		height: 24px;
		background-image: url('@/assets/image/close.svg');
		background-position: center;
		background-size: cover;
		font-size: 24px;
		cursor: url("@/assets/image/cursor-pointer.svg"), pointer;
	}
}
</style>