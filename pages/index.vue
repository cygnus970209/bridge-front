<template>
  <h1 class="title">🍺 BEERS</h1>
  <ul class="list">
    <li v-for="item in data" class="list__item">
      <img :src="item.image" alt="이미지" class="list__img">
      <ul class="list__info">
        <li class="list__name">{{ item.name }}</li>
        <li class="list__price">{{ item.price }}</li>
        <li class="list__rating">⭐️&nbsp;&nbsp;<span>{{ item.rating.average.toFixed(1)
            }}</span>&nbsp;&nbsp;|&nbsp;&nbsp;💬
          &nbsp;&nbsp;<span>{{
      item.rating.reviews
    }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const { data } = await useAsyncData(
  () => $fetch('https://api.sampleapis.com/beers/ale', {})
);
</script>

<style scoped lang="scss">
.title {
  max-width: 390px;
  width: 100%;
  margin: 20px auto 40px;
  font-size: 36px;
}

.list {
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }

  &__img {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 143px;
    height: 143px;
    object-fit: contain;
  }

  &__info {
    width: 100%;
    padding: 0 20px;
  }

  &__name {
    font-size: 20px;
    font-weight: 500;
  }

  &__price {
    font-size: 18px;
    font-weight: 500;
    color: #999;
  }
}
</style>