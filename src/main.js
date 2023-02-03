import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.config.globalProperties.$apexcharts = VueApexCharts;
app.use(router).use(VueApexCharts).mount('#app')
