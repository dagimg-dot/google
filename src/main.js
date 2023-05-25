import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import ResultPage from './pages/ResultPage.vue'
import SearchPage from './pages/SearchPage.vue'

const routes = [
    { path: '/', component: SearchPage },
    { path: '/search', component: ResultPage },
]

const router = createRouter({
    history: createWebHashHistory(),    
    routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
