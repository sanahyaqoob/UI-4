import { createApp } from 'vue';
import App from './App.vue';
import router from '../router'; // Correct import

createApp(App).use(router).mount('#app');
