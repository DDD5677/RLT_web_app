<template>
	<div class="section">
		<div class="container">
			<div class="inner">
				<LeftSidebar />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import LeftSidebar from "./components/LeftSidebar.vue"
</script>


<style lang="scss" scoped>
.section {
	min-height: 100vh;
	background-color: #1D1D1D;
}
</style>
