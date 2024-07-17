<template>
	<div class="left-sidebar">
		<div class="img-box">
			<img src="@/assets/image/left-sidebar.png" alt="image">
		</div>
		<div class="content">
			<h2 class="title"></h2>
			<span class="text text_1"></span>
			<span class="text text_2"></span>
			<span class="text text_3"></span>
			<span class="text text_4"></span>
			<span class="text text_5"></span>
			<span class="text text_6"></span>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.left-sidebar {
	padding: 18px 14px;
	border: 1px solid #4D4D4D;
	border-radius: 12px;
	background-color: #262626;

	.img-box {
		overflow: hidden;
		margin: 5px;
		border-radius: 8px;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			filter: blur(4px);
			-webkit-filter: blur(4px);
			-moz-filter: blur(4px);
			-o-filter: blur(10px);
			-ms-filter: blur(10px);
		}
	}

	.content {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
		padding: 10px;

		.title {
			background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
			border-radius: 12px;
			height: 26px;
			width: 190px;
			margin-top: 10px;
		}

		.text {
			display: block;
			height: 10px;
			border-radius: 4px;
			background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);

			&.text_1 {
				width: 155px;
			}

			&.text_2 {
				width: 190px;
			}

			&.text_3 {
				width: 170px;
			}

			&.text_4 {
				width: 160px;
			}

			&.text_5 {
				width: 140px;
			}

			&.text_6 {
				width: 80px;
			}
		}
	}

}
</style>