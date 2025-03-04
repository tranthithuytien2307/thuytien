import { createRouter, createWebHistory } from 'vue-router';
import ListPokemon from '../../pages/ListPokemon.vue';
import PrivatePart from '../../pages/PrivatePart.vue';

const routes = [
    { path: '/', component: ListPokemon },
    { path: '/pokemon/:name/:id', component: PrivatePart, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
