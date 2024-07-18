<template>
	<div class="item" :id="item.id" draggable="true" @dragover.stop @dragend="dragEnd" @dragstart="dragStart"
		@click="$emit('open', item)">
		<img :src="getImageUrl(item.image)" draggable="false" alt="">
		<span class="amount">{{ item.amount }}</span>
	</div>
</template>

<script setup lang="ts">
import { useInventarStore } from '@/stores/inventarStore'
import { getImageUrl } from '@/helpers/getImage'
import type { ItemType } from '@/types'
const inventarStore = useInventarStore()
const props = defineProps<{ boxId: string, item: ItemType }>()

const dragEnd = (e: any) => {
	if (e.dataTransfer.dropEffect == 'copy') {
		inventarStore.removeItem(props.item.id, props.boxId)
	} else {
		e.target.classList.remove('isDragging')
	}
}
const dragStart = (e: any) => {
	e.target.classList.add('isDragging')
	e.dataTransfer.setData('item', JSON.stringify(props.item))
	e.dataTransfer.dropEffect = 'grabbing';
}
</script>

<style lang="scss" scoped>
.item {
	padding: 10px;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease-in;
	position: relative;

	&:active {
		cursor: url("@/assets/image/cursor-hold.svg"), grabbing;
	}

	&.isDragging {
		opacity: 0.5;
	}

	&:hover {
		background-color: #2F2F2F;
	}

	.amount {
		position: absolute;
		right: 0;
		bottom: 0;
		color: #ffffff8b;
		font-size: 10px;
		font-family: "Inter", sans-serif;
		font-weight: 500;
		text-align: center;
		line-height: 16px;
		width: 16px;
		height: 16px;
		border-top: 1px solid #4D4D4D;
		border-left: 1px solid #4D4D4D;
		border-top-left-radius: 6px;

	}
}
</style>