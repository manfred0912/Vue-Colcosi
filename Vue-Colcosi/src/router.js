import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/home" },
    // { path: "/home", component: MainPage },
    // { path: "/customOrders", component: CustomOrders },
    // { path: "/gallery", component: AboutUs },
    // { path: "/mlstore", component: MLStore },
    // { path: "/faq", component: FAQ },
    // {
    //   path: "/products",
    //   component: Products,
    //   children: [{ path: ":productId", component: ProductDetails }],
    // },
    // { path: "/cart", component: Cart },
    // {
    //   path: "/auth",
    //   component: UserAuth,
    //   children: [{ path: "account", component: AccountDetails }],
    // },
    // {
    //   path: "/admin",
    //   component: AdminPanel,
    //   children: [
    //     { path: "products", component: ManageProducts },
    //     { path: "add", component: AddProducts },
    //     { path: "edit/:productId", component: EditProduct },
    //   ],
    // },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
