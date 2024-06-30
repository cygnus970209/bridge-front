<template>
	<section class="section">
		<div class="section__center">
			<div class="section__inner">
				<h2 class="section__title">반가워요, 앵무님!<br>
					브릿지에서 함께해요</h2>
				<img :src="perspective" alt="축하 이모지" class="section__img">
			</div>
		</div>
		<div class="section__bottom">
			<MoeculeOneButton btn-text=" 시작하기" @click="goHome">
			</MoeculeOneButton>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import perspective from '~/assets/images/img_perspective.png';

const goHome = () => {
	navigateTo({ path: '/home/main' });
}
</script>