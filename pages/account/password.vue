<template>
	<section class="section">
		<div class="section__top">
			<h2 class="section__title">비밀번호 설정</h2>
			<div class="input__container">
				<MoeculeBaseInput type="password" :value="password" placeholder="비밀번호를 입력해주세요." @input="updatePassword">
				</MoeculeBaseInput>
				<MoeculeBaseInput type="password" :value="passwordAgain" placeholder="비밀번호를 다시 입력해주세요."
					@input="updatePasswordAgain">
				</MoeculeBaseInput>
			</div>
		</div>
		<div class="section__bottom">
			<MoeculeOneButton btn-text="확인" :is-disabled="!isComplatePasswordAgain" @click="goNext"></MoeculeOneButton>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';

const isComplatePassword = ref(false);
const isComplatePasswordAgain = ref(true);
const password = ref('');
const passwordAgain = ref('');

const updatePassword = (password) => {
	password.value = password;
}
const updatePasswordAgain = (passwordAgain) => {
	passwordAgain.value = passwordAgain;
}
const goNext = () => {
	navigateTo({ path: '/account/start' });
}
</script>