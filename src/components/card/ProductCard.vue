<template>
  <div
    class="
      flex flex-row
      border-2 border-gray-500
      rounded-lg
      w-full
      h-auto
      my-2
      2xl:w-4/6
      mx-auto
    "
  >
    <div class="flex flex-col w-full mx-5 my-3">
      <CardHeader
        :itemDesc="product.item_desc"
        :productType="product.productType"
        :quantity="product.qty"
        :unit="product.qty_unit"
      />
      <CardContent
        :size="product.size"
        :grade="product.grade"
        :connection="product.connection"
        :country="product.country_name"
      />
    </div>
  </div>
</template>

<script>
import CardContent from "../card/CardContent.vue"
import CardHeader from "../card/CardHeader.vue";
export default {
  components: { CardHeader, CardContent },
  props: ["product"],
};
</script>

<style>
</style>