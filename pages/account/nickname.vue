<template>
    <section class="section">
        <div class="section__top">
            <h2 class="section__title">닉네임 설정</h2>
            <div class="input__container">
                <MoeculeBaseInput type="text" :value="userNickname" placeholder="닉네임을 입력해주세요."
                    @input="updateUserNickname">
                </MoeculeBaseInput>
            </div>
        </div>
        <div class="section__bottom">
            <MoeculeOneButton btn-text="다음" :is-disabled="!isComplate" @click="goNext"></MoeculeOneButton>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isComplate = ref(true);
const userNickname = ref('');

const updateUserNickname = (nickname) => {
    userNickname.value = nickname;
}
const goNext = () => {
    navigateTo({ path: '/account/password' });
}
</script>