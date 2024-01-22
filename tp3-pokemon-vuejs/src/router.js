// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Pokedex from './components/Pokedex.vue';
import DetailsPokemon from './components/DetailsPokemon.vue';

const routes = [
  { path: '/', component: Pokedex },
  { path: '/pokedex/:id', name: 'DetailsPokemon', component: DetailsPokemon, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;