import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Category from "../pages/Category.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Checkout from "../pages/Checkout.vue";
import NotFound from "../pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:category",
    name: "Category",
    component: Category,
  },
  {
    path: "/:category/:product",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPostion) {
    return {
      top: 0
    }
  }
});

export default router;
