import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Category from "../pages/Category.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Checkout from "../pages/Checkout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories/:category",
    name: "Category",
    component: Category,
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
