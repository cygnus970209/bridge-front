<template>
    <section class="section">
        <div class="section__top">
            <h2 class="section__title">title</h2>
            <div class="input__container">
                <MoeculeBaseInput type="text"></MoeculeBaseInput>
            </div>
        </div>
        <div class="btn__container btn__container--column">
            <MoeculeOneButton btnText="다음"></MoeculeOneButton>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
</script>