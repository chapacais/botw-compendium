import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { router } from './routes'

createApp(App).use(router).mount('#app')