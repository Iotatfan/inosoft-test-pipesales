<template>
  <div class="bg-gray-200 flex flex-col">
    <div class="flex flex-col md:flex-row justify-center relative w-full">
      <!-- Filter Dropdown -->
      <ProductTypeFilter />
      <GradeFilter />
      <SizeFilter />
      <ConnectionFilter />
      <!-- Find Button -->
      <div class="md:flex-shrink h-auto w-auto md:w-32 w m-2">
        <button
          class="
            h-full
            w-full
            rounded-xl
            bg-yellow-600
            hover:bg-yellow-500
            transition
            duration-300
            ease-in-out
            outline-none
            flex flex-row
            justify-center
            my-2
            md:my-auto
          "
          v-on:click="findProduct"
        >
          <font-awesome-icon
            :icon="faSearch"
            class="text-white text-xl my-auto mr-2"
          />
          <p class="text-white text-2xl my-auto">Find</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProductTypeFilter from "./filter/ProductTypeFilter.vue";
import GradeFilter from "./filter/GradeFilter.vue";
import SizeFilter from "./filter/SizeFilter.vue";
import ConnectionFilter from "./filter/ConnectionFilter.vue";

export default {
  components: {
    FontAwesomeIcon,
    ProductTypeFilter,
    GradeFilter,
    SizeFilter,
    ConnectionFilter,
  },
  data() {
    return {
      faSearch: faSearch,
    };
  },
  props: ["findProduct"],
  methods: {},
  computed: {
    pipes: function () {
      return this.$store.state.pipes;
    },
  },
};
</script>

<style>
</style>