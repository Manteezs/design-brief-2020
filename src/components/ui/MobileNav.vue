<template>
  <header
    id="menu"
    class="fixed w-screen bg-gray-800 shadow-md top-0 left-0 z-50 md:hidden"
  >
    <!-- This component is going to be deleted sometime soon; I'm going to just make the desktop nav responsive and have it translate in and out. That way, I don't have to maintain two different nav components whenever it's possible to use just one. -->
    <div
      class="container mx-auto md:flex md:justify-start md:items-center md:px-4 md:py-3"
    >
      <div class="flex items-center justify-start px-4 py-3 md:p-0">
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-700 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <div>
          <router-link to="/">
            <img
              class="h-8 ml-4"
              src="/img/logos/dark-background.svg"
              alt="Mint logo"
            />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  watch: {
    $route() {
      this.isOpen = false;
    }
  }
};
</script>
