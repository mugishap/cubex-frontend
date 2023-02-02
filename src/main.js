import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Notification from 'vue-notification'

createApp(App).use(router).use(Notification).mount('#app')
