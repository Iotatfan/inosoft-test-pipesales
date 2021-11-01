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
      z-10
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
    <div class="flex flex-col my-2 mx-3 max-h-36 overflow-y-scroll">
      <button class="" v-for="n in 10" :key="n" v-on:click="changeFilter(n)">
        <p class="text-lg text-left">{{ n }}</p>
      </button>
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
    };
  },
  methods: {

  },
  props: ["showMenu", "changeFilter"],
};
</script>

<style>
</style>