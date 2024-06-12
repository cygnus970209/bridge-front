<template>
    <section class="login">
        <h2 class="login__title">우리를<br>연결시키는<br>여정의 시작-</h2>
        <div class="btn__container">
            <MoeculeOneButton :icon-src="icKakao" btnText="카카오로 시작하기"></MoeculeOneButton>
            <MoeculeOneButton :icon-src="icGoogle" btnText="Google로 시작하기"></MoeculeOneButton>
            <MoeculeOneButton :icon-src="icApple" btnText="Apple로 시작하기"></MoeculeOneButton>
            <MoeculeOneButton :icon-src="icEmail" btnText="이메일로 시작하기"></MoeculeOneButton>
            <AtomBaseButton btnText="도움이 필요하세요?"></AtomBaseButton>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import icKakao from '~/assets/images/ic_kakao.png';
import icGoogle from '~/assets/images/ic_google.png';
import icApple from '~/assets/images/ic_apple.png';
import icEmail from '~/assets/images/ic_email.png';
</script>