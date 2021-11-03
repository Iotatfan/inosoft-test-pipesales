<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Product Type'"
      :dropdownContents="productTypeFilter"
    />
  </div>
</template>

<script>
import FilterDropdown from "./dropdown/FilterDropdown.vue";

export default {
  components: { FilterDropdown },
  computed: {
    productTypeFilter: function () {
      return this.$store.state.productType;
    },
  },
};
</script>

<style>
</style>