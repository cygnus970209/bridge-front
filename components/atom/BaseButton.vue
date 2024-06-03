<template>
	<button type="button" :disabled="props.isDisabled" @click="click" class="btn__item">
		<img v-if="props.iconSrc" :src="props.iconSrc" alt="버튼 아이콘" class="btn__icon">
		<span v-if="props.btnText" v-html="props.btnText" class="btn__text"></span>
	</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	isDisabled: {
		type: Boolean,
		default: false
	},
	iconSrc: String,
	btnText: [String, Number]
});

// 이벤트 정의
const emit = defineEmits(['click']);
const click = () => {
	emit('click');
};
</script>
