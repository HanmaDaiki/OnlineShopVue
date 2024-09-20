import { createApp } from 'vue'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/Aura';
import App from './App.vue'
import 'primeicons/primeicons.css'
import './style.css';

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});
app.mount('#app');
