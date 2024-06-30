<template>
    <section class="section">
        <div class="section__top">
            <h2 class="section__title">인증번호 요청</h2>
            <div class="input__container">
                <MoeculeBaseInput type="email" :value="userEmail" placeholder="이메일을 입력해주세요." @input="updateUserEmail"
                    :btnText="isComplateEmail ? '재전송' : '전송'">
                </MoeculeBaseInput>
                <MoeculeBaseInput type="number" :value="authCode" placeholder="6자리를 입력해주세요." @input="updateAuthCode"
                    btnText="3:00" :isDisabledBtn="true">
                </MoeculeBaseInput>
            </div>
        </div>
        <div class="section__bottom">
            <MoeculeOneButton btn-text="인증하기" :is-disabled="!isComplateCode" @click="goNext"></MoeculeOneButton>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isComplateEmail = ref(false);
const isComplateCode = ref(true);
const userEmail = ref('');
const authCode = ref(null);

const updateUserEmail = (email) => {
    userEmail.value = email;
}
const updateAuthCode = (code) => {
    authCode.value = code;
}
const goNext = () => {
    navigateTo({ path: '/account/nickname' });
}
</script>