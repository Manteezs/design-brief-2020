import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dictionary from "./views/Dictionary.vue";
import Support from "./views/Support.vue";
import CarbonImpact from "./views/CarbonImpact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hash: false,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dictionary",
      name: "dictionary",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Dictionary.vue")
    },
    {
      path: "/support",
      name: "support",
      component: Support
    },
    {
      path: "/carbon-impact",
      name: "carbon-impact",
      component: CarbonImpact
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404.vue")
    }
  ],
  linkExactActiveClass: "bg-gray-900 text-gray-300 shadow-inner"
});
