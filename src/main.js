import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import customPlus from './components/index'

const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.use(customPlus)

app.mount('#app');
