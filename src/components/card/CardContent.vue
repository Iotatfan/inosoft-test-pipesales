<template>
  <div class="flex flex-row justify-between">
    <!-- Size -->
    <CardText :title="`Size`" :content="size" class="items-start w-1/4 text-left" />
    <!-- Grade -->
    <CardText :title="`Grade`" :content="grade" class="items-start w-1/4 text-left" />
    <!-- Connection -->
    <CardText
      :title="`Connection`"
      :content="connection"
      class="items-end w-1/4 text-right"
    />
    <!-- Country of Origin -->
    <CardText :title="`Country`" :content="country" class="items-end w-1/4 text-right" />
  </div>
</template>

<script>
import CardText from "./CardText.vue";
export default {
  components: { CardText },
  props: ["size", "grade", "connection", "country"],
};
</script>

<style>
</style>