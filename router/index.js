import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'; // Correct relative path

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
