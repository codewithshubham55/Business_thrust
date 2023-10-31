import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // Define your routes here
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/update-product/:id',
    name: 'update-product',
    component: () => import('../components/product/ProductUpdate.vue'),
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: () => import('../components/product/ProductAdd.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/products',
    name: 'ProductsList',
    component: () => import('../views/ProductList.vue'),
    meta: { requiresAuth: true }, // Protected route
  },
  {
    path: '/add-order/:id',
    name: 'add-order',
    component: () => import('../components/product/orders/Addorder.vue'),
  },

  // More routes
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use 'history' or 'hash', depending on your preference
});

export default router;
