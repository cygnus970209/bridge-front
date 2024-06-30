<template>
	<div class="input">
		<label class="input__box">
			<h4 v-if="props.title" :class="['input__title', props.isRequired ? 'input__title--required' : '']">{{
				props.title }}</h4>
			<div :class="['input__inner', props.isDisabled ? 'input__inner--disabled' : '']">
				<div :class="['input__item', isFocus ? 'input__item--focus' : '']">
					<input :type="props.type" :placeholder="props.placeholder" :value="props.value" :maxlength="props.maxlength"
						:disabled="props.isDisabled" :readonly="props.isReadonly" autocomplete="new-password" @input="checkLength"
						@focus="focusFunction" @blur="blurFunction" class="input__field">
					<span v-if="props.isComplete && props.showCheckIcon" class="input__icon"></span>
					<AtomBaseButton v-if="props.btnText || props.btnIconSrc" :isDisabled="props.isDisabled || props.isDisabledBtn"
						:btnText="props.btnText" :iconSrc="props.btnIconSrc" @click="btnEvent">
					</AtomBaseButton>
				</div>
			</div>
		</label>
		<p v-if="props.msg" :class="['input__msg', props.isComplete ? '' : 'input__msg--error']">{{ props.msg }}</p>
	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
	isDisabled: Boolean,
	isDisabledBtn: Boolean,
	isComplete: Boolean,
	isReadonly: Boolean,
	isRequired: Boolean, // 필수 표시 여부
	showCheckIcon: Boolean,
	type: {
		type: String,
		default: 'text'
	},
	title: String,
	placeholder: String,
	value: [String, Number],
	maxlength: Number,
	msg: String,
	btnText: String,
	btnIconSrc: String,
	showSelect: Boolean,
	selectList: Array,
});

const isFocus = ref(false);
const valueLength = ref(0);
const showDeleteBtn = ref(false);

const emit = defineEmits([
	'input',
	'focus',
	'blur',
	'clear',
	'btn-event',
	'option',
]);
const checkLength = (event) => {
	emit('input', event.target.value);
	valueLength.value = event.target.value.length;
}
const focusFunction = (event) => {
	isFocus.value = true;
	valueLength.value = event.target.value.length;
	toggleDeleteBtn(event);
	emit('focus');
}
const blurFunction = () => {
	isFocus.value = false;
	showDeleteBtn.value = false;
	emit('blur');
}
const toggleDeleteBtn = () => {
	if (valueLength.value > 0) {
		showDeleteBtn.value = true;
	} else {
		showDeleteBtn.value = false;
	}
}
const clearValue = () => {
	emit('clear');
	valueLength.value = 0;
}
const handleMouseDown = (event) => {
	event.preventDefault();
}
const btnEvent = () => {
	emit('btn-event');
}
const selectFunction = (value) => {
	emit('option', value);
}

watch(valueLength, () => {
	toggleDeleteBtn();
	return valueLength;
});
</script>