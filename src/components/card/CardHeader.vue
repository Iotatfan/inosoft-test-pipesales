<template>
  <div class="flex flex-row justify-between pb-2">
    <CardHeadline :text="productType" class="w-1/4" />
    <CardHeadline :text="itemDesc" class="w-2/4" />
    <CardText
      :title="`Quantity (${unit})`"
      :content="quantity"
      class="items-end w-1/4"
    />
  </div>
</template>

<script>
import CardHeadline from "../card/CardHeadline.vue";
import CardText from "../card/CardText.vue";

export default {
  components: { CardText, CardHeadline },
  props: ["productType", "itemDesc", "quantity", "unit"],
};
</script>

<style>
</style>