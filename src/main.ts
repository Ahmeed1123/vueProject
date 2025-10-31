import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {store} from './store.js';
import {router} from './router.js';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// import {store}
const app = createApp(App);
app.use(store);
app.use(autoAnimatePlugin);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);
app.mount('#app');

document.title = store.state.app_title;