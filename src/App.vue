<template>
	<div class="section" @drop.prevent>
		<div class="container">
			<div class="inner">
				<div class="top">
					<LeftSidebar />
					<Inventar />
				</div>
				<Footer />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import LeftSidebar from "./components/LeftSidebar.vue"
import Inventar from "./components/Inventar.vue"
import Footer from "./components/Footer.vue"
</script>


<style lang="scss" scoped>
.section {
	min-height: 100vh;
	background-color: #1D1D1D;

	.inner {
		padding: 32px;

		.top {
			display: flex;
			gap: 24px;
			margin-bottom: 24px;
		}
	}
}
</style>
