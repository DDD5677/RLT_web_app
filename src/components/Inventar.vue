<template>
	<div class="inventar" @drop.prevent>
		<Box v-for="box in  inventarStore.Boxes " :key="box.id" :box="box" @open="openHandler" />
		<Transition name="scale" appear>
			<ItemDetail v-show="isOpen" @close="closeHandler" :item="item" :boxId="boxId" />
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ItemType } from '@/types'
import Box from '@/components/Box.vue'
import ItemDetail from "./ItemDetail.vue"
import { useInventarStore } from '@/stores/inventarStore'
const inventarStore = useInventarStore()
const isOpen = ref(false)
const item = ref<ItemType | null>(null)
const boxId = ref('')
inventarStore.getBoxes()

const openHandler = (a: ItemType, b: string) => {
	isOpen.value = true
	item.value = a
	boxId.value = b
}
const closeHandler = () => {
	isOpen.value = false
}
</script>

<style lang="scss" scoped>
.inventar {
	position: relative;
	flex-grow: 1;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	overflow: hidden;
	border-radius: 12px;
	border-top: 1px solid #4D4D4D;
	border-left: 1px solid #4D4D4D;
	cursor: url("@/assets/image/cursor-pointer.svg"), auto;


	scale-enter-active {
		animation: scale-in 0.5s;
	}

	.scale-leave-active {
		animation: scale-in 0.5s reverse;
	}

	@keyframes scale-in {
		0% {
			transform-origin: right;
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}
}
</style>