<template>
  <Navbar />

  <div class="container is-max-desktop pt-5 pb-4 main">
    <RouterView />
  </div>
</template>

<script setup>
//  imports
import { onMounted } from 'vue';
import { useStoreCharacters } from '@/stores/storeCharacters';
import { useStoreEpisodes } from '@/stores/storeEpisodes';
import { useStoreLocations } from '@/stores/storeLocations';
import Navbar from '@/components/Layout/Navbar.vue';

// stores
const storeCharacters = useStoreCharacters();
const storeEpisodes = useStoreEpisodes();
const storeLocations = useStoreLocations();

// mounted
onMounted(() => {
  storeCharacters.getAllCharacters();
  storeEpisodes.getAllEpisodes();
  storeLocations.getAllLocations();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';

@media (max-width: 1023px) {
  .main {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>
