<template>
	<section class="section">
		<div class="section__top">
			<h2 class="section__title">이메일 로그인</h2>
			<div class="input__container">
				<MoeculeBaseInput type="email" :value="userEmail" placeholder="이메일을 입력해주세요." @input="updateUserEmail">
				</MoeculeBaseInput>
				<MoeculeBaseInput type="password" :value="password" placeholder="비밀번호를 입력해주세요." @input="updatePassword">
				</MoeculeBaseInput>
			</div>
		</div>
		<div class="section__bottom">
			<div class="btn__container btn__container--column">
				<AtomBaseButton btn-text="회원가입하기" @click="goJoin" class="btn--text"></AtomBaseButton>
				<MoeculeOneButton btn-text="로그인하기" @click="goHome"></MoeculeOneButton>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';

const isComplateEmail = ref(false);
const isComplatePassword = ref(false);
const userEmail = ref('');
const password = ref('');

const updateUserEmail = (email) => {
	userEmail.value = email;
}
const updatePassword = (password) => {
	password.value = password;
}
const goJoin = () => {
	navigateTo({ path: '/account/terms' });
}
const goHome = () => {
	navigateTo({ path: '/home/main' });
}
</script>