<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Product Type'"
      :dropdownContents="productTypeFilter"
      :count="countProductType"
    />
  </div>
</template>

<script>
import FilterDropdown from "../FilterDropdown.vue";

export default {
  components: { FilterDropdown },
  methods: {
    countProductType: function (item) {
      let qty = 0;

      this.$store.state.pipes.filter((pipe) => {
        return pipe[this.productTypeFilter.name] === item ? qty++ : false;
      });

      // this.$store.state.pipes.forEach((pipe) => {
      //   if (pipe[this.productTypeFilter.name] === item) qty++;
      // });

      return qty;
    },
  },
  computed: {
    productTypeFilter: function () {
      return this.$store.state.productType;
    },
  },
};
</script>

<style>
</style>