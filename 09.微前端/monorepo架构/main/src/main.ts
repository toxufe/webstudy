// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'
// import Wujie from 'wujie-vue-setup-test01'

// import {api} from 'common'

// 预加载
import { preloadApp} from "wujie";


const app = createApp(App)

app.use(router)
app.use(Wujie)

app.mount('#app')

preloadApp({name:'vue',URL:'http://localhost:5174/',exec:true});
preloadApp({name:'vue',URL:'http://localhost:5175/',exec:true});
