<template>
  <div id="app" class="h-screen flex">
    <Nav />
    <BreakpointIndicator v-if="dev" />
    <div class="flex-1 min-w-0">
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/ui/Nav.vue";
import BreakpointIndicator from "@/components/dev/BreakpointIndicator.vue";

export default {
  components: {
    Nav,
    BreakpointIndicator
  },
  data() {
    return {
      dev: true
    };
  }
};
</script>

<style src="./assets/tailwind.css"></style>
