import { createRouter, createWebHashHistory } from 'vue-router'

import ResultPage from '../pages/ResultPage.vue'
import SearchPage from '../pages/SearchPage.vue'

const routes = [
    { path: '/', component: SearchPage },
    { path: '/search', component: ResultPage },
]

const router = createRouter({
    history: createWebHashHistory(),    
    routes,
})

export default router