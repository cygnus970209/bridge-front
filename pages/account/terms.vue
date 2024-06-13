<template>
    <section class="section">
        <div class="section__top">
            <h2 class="section__title">이용약관 동의</h2>
            <label v-for="item in terms" class="checkbox">
                <input type="checkbox" :value="item.value" v-model="checkedTerms" class="checkbox__item">{{ item.text }}
            </label>
        </div>
        <MoeculeOneButton btnText="다음"></MoeculeOneButton>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const terms = ref([
    { isRequired: false, value: 'all', text: '네, 모두 동의 합니다.' },
    { isRequired: true, value: 'collection', text: '이용약관' },
    { isRequired: true, value: 'thirdParty', text: '개인정보 수집 및 이용 동의 ' },
]);
const checkedTerms = ref([]);
</script>