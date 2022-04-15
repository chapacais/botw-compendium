import * as VueRouter from 'vue-router';

import Home from './components/homepage/Home.vue';
import Creatures from './components/creatures/Creatures.vue';
import Equipment from './components/equipment/Equipment.vue';
import Materials from './components/materials/Materials.vue';
import Monsters from './components/monsters/Monsters.vue';
import Treasure from './components/treasure/Treasure.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/creatures',
        component: Creatures
    },
    {
        path: '/equipment',
        component: Equipment
    },
    {
        path: '/materials',
        component: Materials
    },
    {
        path: '/monsters',
        component: Monsters
    },
    {
        path: '/treasure',
        component: Treasure
    }
]

export const router = VueRouter.createRouter(
    {
        linkExactActiveClass: 'is-active',
        history: VueRouter.createWebHistory(),
        routes: routes
    }
)