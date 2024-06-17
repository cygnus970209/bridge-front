<template>
	<section class="section">
		<div class="section__top">
			<h2 class="section__title">이용약관 동의</h2>
			<label class="checkbox checkbox--all" @click="isChecked">
				<input type="checkbox" value="all" v-model="checkedTerms" class="checkbox__item"><span
					class="checkbox__text">네,
					모두 동의
					합니다.</span>
			</label>
			<div class="checkbox__list">
				<label v-for="item in terms" :class="['checkbox', item.isRequired ? 'checkbox--required' : '']">
					<input type="checkbox" :value="item.value" v-model="checkedTerms" class="checkbox__item"><span
						class="checkbox__text">{{
				item.text }}&nbsp;<strong>({{ item.isRequired ? '필수' : '선택' }})</strong></span>
				</label>
			</div>
		</div>
		<MoeculeOneButton btnText="다음"></MoeculeOneButton>
	</section>
</template>

<script setup>
import { ref } from 'vue';

const terms = ref([
	{ isRequired: true, value: 'collection', text: '이용약관' },
	{ isRequired: true, value: 'thirdParty', text: '개인정보 수집 및 이용 동의 ' },
]);
const checkedTerms = ref([]);
const isChecked = () => {
	const checkAll = document.querySelector('.checkbox--all');
	const checkbox = document.querySelector('.checkbox--all > input');

	if (checkbox.checked) {
		checkAll.classList.toggle('checkbox--checked');
	}
}

</script>