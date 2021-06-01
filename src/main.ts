import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { store } from './store/store'
import "tailwindcss/tailwind.css"

import { createToaster } from './components/alert'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createToaster)

app.mount('#app')
