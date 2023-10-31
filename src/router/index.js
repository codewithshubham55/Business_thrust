import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

//routes of full view

const routes = [
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
    meta: { requiresAuth: true }, 
  },
  {
    path: '/add-order/:id',
    name: 'add-order',
    component: () => import('../components/product/orders/Addorder.vue'),
  },

];

const router = new VueRouter({
  routes,
  mode: 'history', 
});

export default router;
