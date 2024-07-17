<template>
	<div class="box" :draggable="false" @dragover.prevent @drop.prevent="drop">
		<Item v-for="item in box.items" :key="item.id" :boxId="box.id" :item="item"
			@open="(a: ItemType) => $emit('open', a, box.id)" />
	</div>
</template>

<script lang="ts" setup>
import Item from '@/components/Item.vue';
import type { BoxType, ItemType } from '@/types'
import { useInventarStore } from '@/stores/inventarStore'
const inventarStore = useInventarStore()
const props = defineProps<{ box: BoxType }>()

const drop = (e: any) => {
	const item = e.dataTransfer.getData('item')
	inventarStore.addItem(JSON.parse(item), props.box.id)
}
</script>

<style lang="scss" scoped>
.box {
	background-color: #262626;
	border-right: 1px solid #4D4D4D;
	border-bottom: 1px solid #4D4D4D;

	&:nth-child(1) {
		border-top-left-radius: 12px;
	}

	&:nth-child(5) {
		border-top-right-radius: 12px;
	}

	&:nth-child(21) {
		border-bottom-left-radius: 12px;
	}

	&:nth-child(25) {
		border-bottom-right-radius: 12px;
	}
}
</style>