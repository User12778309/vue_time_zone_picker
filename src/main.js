
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import './style.css'
import "./assets/tailwind.css";
import Aura from '@primevue/themes/aura';


const app = createApp(App);
app.use(PrimeVue, { theme:  {
  preset: Aura
} });
app.mount("#app");