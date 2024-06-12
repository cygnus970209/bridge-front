<template>
    <NuxtPage />
    <div style="position:fixed;"></div> <!-- 삼성브라우저 scroll 이슈 -->
</template>

<script setup>
import { ref } from 'vue';
let nuxtApp = useNuxtApp();
</script>