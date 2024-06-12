<template>
	<div :class="['btn', 'btn--full', props.isSticky ? 'btn--sticky' : '']">
		<AtomBaseButton :isDisabled="props.isDisabled" :iconSrc="props.iconSrc" :btnText="props.btnText" @click="click">
		</AtomBaseButton>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	isSticky: Boolean,
	isDisabled: Boolean,
	iconSrc: String,
	btnText: {
		type: [String, Number],
		default: '확인'
	},
});

// 이벤트 정의
const emit = defineEmits(['click']);
const click = () => {
	emit('click');
};
</script>
