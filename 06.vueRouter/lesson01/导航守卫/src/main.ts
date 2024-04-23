import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementUi).mount('#app')
 