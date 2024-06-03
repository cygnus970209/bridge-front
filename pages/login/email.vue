<template>{{ text }}</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'login-header',
});
const text = ref('이메일 로그인 페이지');
</script>