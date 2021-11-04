<template>
  <div
    class="
      flex flex-col
      h-screen
      bg-gray-200
      justify-start
      mx-auto
      overflow-y-scroll
    "
  >
    <div>
      <h1 class="text-gray-900 font-bold text-4xl m-4">Pipesales Datatables</h1>
    </div>
    <!-- Filter Group -->
    <Filters :findProduct="findProduct" />
    <!-- Table Group -->
    <Datatables v-if="showProduct" :products="products" />
  </div>
</template>

<script>
import Datatables from "./Datatables.vue";
import Filters from "./Filters.vue";
export default {
  components: {
    Filters,
    Datatables,
  },
  data() {
    return {
      showProduct: false,
      products: [],
    };
  },
  computed: {
    filters: function () {
      return this.$store.state.filters;
    },
    pipes: function () {
      return this.$store.state.pipes;
    },
  },
  methods: {
    findProduct: function () {
      let products = this.pipes.filter((pipe) => {
        return (
          (this.filters.productType
            ? this.filters.productType === pipe.productType
            : true) &&
          (this.filters.grade ? this.filters.grade === pipe.grade : true) &&
          (this.filters.size ? this.filters.size === pipe.size : true) &&
          (this.filters.connection
            ? this.filters.connection === pipe.connection
            : true)
        );
      });
      this.showProduct = true;
      this.products = products;
    },
  },
  created() {
    this.$store.dispatch("getPipes");
  },
};
</script>

<style>
</style>