<template>
  <section class="login">
    <div class="login__inner">
      <h2 class="login__title">우리를<br>연결시키는<br>여정의 시작-</h2>
      <div class="btn__container">
        <MoeculeOneButton :icon-src="icKakao" btn-text="카카오로 시작하기" class="btn--kakao">
        </MoeculeOneButton>
        <MoeculeOneButton :icon-src="icGoogle" btn-text="Google로 시작하기 " class="btn--google"></MoeculeOneButton>
        <MoeculeOneButton :icon-src="icApple" btn-text="Apple로 시작하기 " class="btn--apple"></MoeculeOneButton>
        <MoeculeOneButton :icon-src="icEmail" btn-text="이메일로 시작하기 " @click="goEmailLogin"></MoeculeOneButton>
        <AtomBaseButton btn-text="도움이 필요하세요?" class="btn--text"></AtomBaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import icKakao from '~/assets/images/ic_kakao.png';
import icGoogle from '~/assets/images/ic_google.png';
import icApple from '~/assets/images/ic_apple.png';
import icEmail from '~/assets/images/ic_email.png';

const goEmailLogin = () => {
  navigateTo({ path: '/login/email' });
}
</script>
<style>
@import url(~/assets/css/components/pages/login/login.scss);
</style>