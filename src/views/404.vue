<template>
  <div class="flex flex-col h-full bg-white">
    <div class="px-8 py-4">
      <img src="/img/illustrations/404.jpg" alt="404" />
    </div>
    <div>
      <h1
        class="mt-10 text-4xl text-gray-900 font-bold text-center leading-tight sm:text-6xl"
      >
        Page not found
        <span class="text-teal-500">.</span>
      </h1>
    </div>
    <div class="mt-4 text-center">
      <p class="text-gray-600 sm:text-xl">
        Sorry, but we couldn't find
        <span
          class="px-3 py-1 font-medium text-sm border border-gray-400 rounded-full sm:text-base"
          >{{ currentRoute }}</span
        >
        .
      </p>
    </div>
    <div class="text-center mt-16">
      <a @click="$router.go(-1)" class="btn btn-teal">Go back</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$route.path
    };
  }
};
</script>
