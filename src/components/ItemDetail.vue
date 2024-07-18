<template>
	<div class="item-detail">
		<div class="img-box">
			<img :src="getImageUrl(item?.image)" alt="item-image">
		</div>
		<div class="content">
			<h2 class="title"></h2>
			<span class="text text_1"></span>
			<span class="text text_2"></span>
			<span class="text text_3"></span>
			<span class="text text_4"></span>
			<span class="text text_5"></span>
		</div>
		<div v-if="confirmOpen" class="confirm-block">
			<input type="text" placeholder="Введите количество" @input="validateCount">
			<div class="btns">
				<button class="reject-btn" @click.prevent="reject">Отмена</button>
				<button class="accept-btn" @click.prevent="accept">Подтвердить</button>
			</div>
		</div>
		<button class="btn" @click.prevent="() => confirmOpen = true">Удалить предмет</button>
		<span class="close-btn" @click="emit('close')"></span>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ItemType } from '@/types'
import { getImageUrl } from '@/helpers/getImage';
import { useInventarStore } from '@/stores/inventarStore'
const inventarStore = useInventarStore()
const emit = defineEmits(['close'])
const props = defineProps<{ item: ItemType | null, boxId: string }>()
const count = ref('')
const confirmOpen = ref(false)
const validateCount = (e: any) => {
	count.value = e.target.value.replace(/[^0-9]/g, '')
	e.target.value = count.value
	console.log(count.value);
}

const reject = () => {
	confirmOpen.value = false
}

const accept = () => {
	if (!props.item) return
	inventarStore.deleteItem(props.item.id, props.boxId, count.value)
	emit('close')
}
</script>

<style lang="scss" scoped>
.item-detail {
	position: absolute;
	top: 0;
	right: 0;
	min-height: 100%;
	width: 50%;
	z-index: 100;
	padding: 18px;
	border-radius: 0 12px 12px 0;
	border: 1px solid #4D4D4D;
	background: rgba(38, 38, 38, 0.6);
	border-top: none;
	backdrop-filter: blur(11.3px);
	-webkit-backdrop-filter: blur(11.3px);
	cursor: url("@/assets/image/cursor.svg"), default;

	.img-box {
		margin-top: 35px;
		padding-bottom: 30px;
		text-align: center;

		img {
			width: 130px;
			height: 130px;
			object-fit: cover;
		}

	}

	.content {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
		padding: 10px 10px 24px;
		border-top: 1px solid #4D4D4D;
		border-bottom: 1px solid #4D4D4D;

		.title {
			background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
			border-radius: 8px;
			height: 30px;
			width: 210px;
			margin-top: 6px;
			margin-bottom: 8px;
		}

		.text {
			display: block;
			height: 10px;
			border-radius: 4px;
			background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);

			&.text_1 {
				width: 210px;
			}

			&.text_2 {
				width: 210px;
			}

			&.text_3 {
				width: 210px;
			}

			&.text_4 {
				width: 180px;
			}

			&.text_5 {
				width: 80px;
			}
		}
	}


	.btn {
		width: 100%;
		padding: 11px 20px;
		margin-top: 18px;
		text-align: center;
		border-radius: 8px;
		font-size: 14px;
		line-height: 16px;
		color: #fff;
		border: none;
		background-color: rgba(255, 136, 136, 1);
		cursor: url("@/assets/image/cursor.svg"), pointer;
	}

	.confirm-block {
		padding: 20px;
		width: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: #262626;
		border-top: 1px solid #4D4D4D;
		border-bottom-right-radius: 12px;

		input {
			padding: 11px 12px;
			margin-bottom: 20px;
			width: 100%;
			background-color: #262626;
			outline: none;
			font-size: 14px;
			border: 1px solid #4D4D4D;
			border-radius: 4px;
			color: #fff;

			&::placeholder {
				font-family: "Inter", sans-serif;
				font-weight: 500;
			}
		}

		.btns {
			display: flex;
			justify-content: space-between;

			button {
				padding: 8px 15px;
				font-family: "Inter", sans-serif;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				outline: none;
				border-radius: 8px;
				border: none;
				cursor: pointer;

				&.accept-btn {
					background-color: #FA7272;
					color: #fff;
				}
			}
		}
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