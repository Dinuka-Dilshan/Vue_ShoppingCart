import { createRouter, createWebHistory } from 'vue-router';
import Products from './pages/Products.vue'
import Cart from './pages/Cart.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart },
  ]
});

export default router;