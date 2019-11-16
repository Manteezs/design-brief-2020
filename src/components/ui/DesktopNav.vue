<template>
  <div>
    <header
      id="menu"
      class="fixed w-screen bg-gray-800 shadow-md top-0 left-0 z-30 md:hidden"
    >
      <div
        class="container mx-auto md:flex md:justify-between md:items-center md:px-4 md:py-3"
      >
        <div class="flex items-center justify-between px-4 py-3 md:p-0">
          <div>
            <router-link to="/">
              <img
                class="h-8 ml-4"
                src="/img/logos/dark-background.svg"
                alt="Mint logo"
              />
            </router-link>
          </div>
          <div class="md:hidden">
            <button
              @click="sidebarOpen = true"
              type="button"
              class="block text-gray-700 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
            >
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-if="!sidebarOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <nav
      id="navigation"
      :class="
        sidebarOpen
          ? 'translate-x-0 ease-out transition-medium'
          : '-translate-x-full ease-in transition-medium'
      "
      class="fixed flex-shrink-0 w-64 bg-gray-800 z-50 inset-y-0 left-0 overflow-auto md:translate-x-0"
    >
      <div class="md:hidden absolute top-0 right-0 mr-8 mt-10">
        <button
          @click="sidebarOpen = false"
          class="text-gray-700 hover:text-gray-500 focus:text-gray-500 focus:outline:none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          </svg>
        </button>
      </div>
      <div class="h-screen py-8 px-8">
        <router-link to="/">
          <img class="h-8" src="/img/logos/dark-background.svg" alt="Mint" />
        </router-link>
        <div class="mt-12">
          <h2
            class="text-xs uppercase text-gray-500 font-semibold tracking-wide"
          >
            Models
          </h2>
          <div class="mt-2 -mx-3">
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Hydrogen</span
              >
              <span
                class="text-xs font-semibold bg-teal-900 text-teal-600 px-2 py-px rounded-full uppercase tracking-wide"
                >New</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Helium</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Lithium</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Beryllium</span
              >
              <span
                class="text-xs font-semibold bg-teal-900 text-teal-600 px-2 py-px rounded-full uppercase tracking-wide"
                >New</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Boron</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Carbon</span
              >
            </a>
          </div>
        </div>
        <div class="mt-8">
          <h2
            class="text-xs uppercase text-gray-500 font-semibold tracking-wide"
          >
            Company
          </h2>
          <div class="mt-2 -mx-3">
            <router-link
              to="/support"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Support</span
              >
            </router-link>
            <router-link
              to="/dictionary"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Dictionary</span
              >
            </router-link>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Carbon Impact</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Press</span
              >
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Legal</span
              >
            </a>
          </div>
        </div>
      </div>
      <!--<div class="-mt-2 px-8 py-4 bg-gray-900 text-center text-gray-700">
      <p class="text-sm">Mint Electric &copy; 2019</p>
    </div>-->
    </nav>
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = !sidebarOpen"
      class="block md:hidden transition-medium fixed top-0 bottom-0 left-0 right-0 w-full h-full z-40"
      style="background: rgba(0,0,0,0.7);content:''"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false
    };
  }
};
</script>
