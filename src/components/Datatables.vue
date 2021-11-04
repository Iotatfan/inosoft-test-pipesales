<template>
  <div class="flex flex-col md:p-6 p-2 2xl:">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./card/ProductCard.vue";
export default {
  components: { ProductCard },
  props: ["products"],
};
</script>

<style>
</style>