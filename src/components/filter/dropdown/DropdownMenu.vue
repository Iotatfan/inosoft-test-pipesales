<template>
  <div
    class="
      md:flex-shrink
      absolute
      bg-gray-200
      border-2 border-black
      rounded-xl
      w-full
      my-1
      z-20
    "
    v-if="showMenu"
  >
    <!-- Header -->
    <div class="flex flex-row my-2 mx-3">
      <p class="text-gray-900 text-xl text-left">Select a Filter Bellow</p>
    </div>
    <!-- Search -->
    <div class="flex flex-row mx-3">
      <font-awesome-icon
        :icon="faSearch"
        class="text-gray-900 text-lg my-auto mr-2"
      />
      <input
        type="text"
        v-model="keyword"
        class="
          bg-gray-200
          text-gray-800 text-xl
          border-transparent
          ml-2
          w-full
          outline-none
        "
        placeholder="Search"
      />
    </div>
    <!-- Menu -->
    <div class="flex flex-col my-2 mx-3 max-h-36 overflow-y-auto">
      <span
        class="
          flex flex-row
          justify-between
          cursor-pointer
          px-2
          hover:bg-gray-300
          transition
          duration-300
          ease-in-out
        "
        v-for="item in searchKeywords"
        :key="item"
        v-on:click="changeFilter(item)"
      >
        <p class="text-lg text-left">{{ item }}</p>
        <p class="text-lg text-right">{{ dropdown.amount[item] }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      faSearch: faSearch,
      keyword: "",
    };
  },
  computed: {
    searchKeywords: function () {
      return this.keyword
        ? this.dropdown.contents.filter((n) =>
            n.toString().toLowerCase().includes(this.keyword)
          )
        : this.dropdown.contents;
    },
  },
  props: ["showMenu", "changeFilter", "dropdown"],
  mounted() {
    this.pipes = this.$store.state.pipes;
  },
};
</script>

<style>
</style>