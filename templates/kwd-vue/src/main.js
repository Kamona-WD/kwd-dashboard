import { createApp } from 'vue'
import router from './router'
import App from './App'
import 'boxicons/css/boxicons.min.css'
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
