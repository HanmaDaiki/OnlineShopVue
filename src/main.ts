import { createApp } from 'vue'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import 'primeicons/primeicons.css'
import './style.css';

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: false
        }
    }
});
app.mount('#app');
