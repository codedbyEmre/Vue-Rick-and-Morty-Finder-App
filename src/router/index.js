import { createRouter, createWebHistory } from 'vue-router';
import ViewCharacters from '@/views/ViewCharacters/ViewCharacters.vue';
import ViewCharacterDetail from '@/views/ViewCharacters/ViewCharacterDetail.vue';
import ViewEpisodes from '@/views/ViewEpisodes/ViewEpisodes.vue';
import ViewEpisodeDetail from '@/views/ViewEpisodes/ViewEpisodeDetail.vue';
import ViewLocations from '@/views/ViewLocations/ViewLocations.vue';
import ViewLocationDetail from '@/views/ViewLocations/ViewLocationDetail.vue';

const routes = [
  {
    path: '/',
    name: 'characters',
    component: ViewCharacters
  },
  {
    path: '/characterDetail/:id',
    name: 'characterDetail',
    component: ViewCharacterDetail
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: ViewEpisodes
  },
  {
    path: '/episodeDetail/:id',
    name: 'episodeDetail',
    component: ViewEpisodeDetail
  },
  {
    path: '/locations',
    name: 'locations',
    component: ViewLocations
  },
  {
    path: '/locationDetail/:id',
    name: 'locationDetail',
    component: ViewLocationDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
