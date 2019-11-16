<template>
  <div id="app" class="h-screen flex">
    <DesktopNav />
    <BreakpointIndicator v-if="dev" />
    <div class="flex-1 min-w-0">
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import DesktopNav from "@/components/ui/DesktopNav.vue";
import BreakpointIndicator from "@/components/dev/BreakpointIndicator.vue";

export default {
  components: {
    DesktopNav,
    BreakpointIndicator
  },
  data() {
    return {
      dev: false
    };
  }
};
</script>

<style src="./assets/tailwind.css"></style>
