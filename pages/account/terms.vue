<template>
	<section class="section">
		<div class="section__top">
			<h2 class="section__title">이용약관 동의</h2>
			<label :class="['checkbox', 'checkbox--all', checkedAll ? 'checkbox--checked' : '']">
				<input type="checkbox" value="all" v-model="checkedAll" @input="checkedAllHandler"
					class="checkbox__item"><span class="checkbox__text">네,
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
		<div class="section__bottom">
			<MoeculeOneButton btn-text="다음" :is-disabled="!isComplate" @click="goNext"></MoeculeOneButton>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';

const isComplate = ref(false);
const checkedAll = ref(false);
const checkedTerms = ref([]);
const terms = ref([
	{ isRequired: true, value: 'termsUse', text: '이용약관 동의' },
	{ isRequired: true, value: 'collection', text: '개인정보 수집 및 이용 동의' },
	{ isRequired: false, value: 'thirdParty', text: '제3자 정보제공 동의' },
]);

const checkedAllHandler = () => {
	if (!checkedAll.value) {
		checkedTerms.value.splice(0);
		terms.value.forEach(item => checkedTerms.value.push(item.value));
		isComplate.value = true;
	} else {
		checkedTerms.value.splice(0);
		isComplate.value = false;
	}
}
const checkRequired = () => {
	const requiredTerms = terms.value.filter((item) => item.isRequired == true);
	const checkRequired = [];

	requiredTerms.forEach((item) => {
		checkRequired.push(checkedTerms.value.includes(item.value));
	});
	return checkRequired.every((item) => item == true);
}
const goNext = () => {
	navigateTo({ path: '/account/auth' });
}

watch(checkedTerms, (newList) => {
	// 전체동의 체크/해제
	if (newList.length == terms.value.length) {
		checkedAll.value = true;
	} else {
		checkedAll.value = false;
	}

	// 필수값 체크
	isComplate.value = checkRequired();
});
</script>