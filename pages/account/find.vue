<template>{{ text }}</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'login-header',
});
const text = ref('계정/비밀번호 찾기 페이지');
</script>