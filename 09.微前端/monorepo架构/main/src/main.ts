// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'

// import {api} from 'common'

const app = createApp(App)

app.use(router)
app.use(Wujie)

app.mount('#app')
