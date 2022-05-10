import {createRouter } from 'vue-router'

import Explore from './components/Explore.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Explore,
            name: 'Explore'
        }
    ]
})
export default router