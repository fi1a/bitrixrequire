import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js'
import './assets/main.css'
import Index from './views/Index.vue';

const app = createApp(App);

app.config.globalProperties.$scrollTop = (top) => {
    this.intervalId = setInterval(() => {
        if (window.scrollY <= top) {
            clearInterval(this.intervalId)

            return;
        }
        window.scroll(0, window.scrollY - 25)
    }, 20)
}

app.config.globalProperties.$right = window.FBR_RIGHT;

app.use(i18n);

app.component('Index', Index);

app.mount('#app');
