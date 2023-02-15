<template>
  <div v-if="!storeEpisodes.loading">
    <div class="episodes-main">
      <div v-for="episode in storeEpisodes.episodes" :key="episode.id" class="card episode-main">
        <Episode :episode="episode" />
      </div>
    </div>

    <Pagination :store="storeEpisodes" :infos="storeEpisodes.episodesInfos" pageName="Episodes" />
  </div>

  <Loading v-else />
</template>

<script setup>
// imports
import { onMounted } from 'vue';
import { useStoreEpisodes } from '@/stores/storeEpisodes';
import Episode from '@/components/Episodes/Episode.vue';
import Loading from '@/components/Shared/Loading.vue';
import Pagination from '@/components/Shared/Pagination.vue';

// store
const storeEpisodes = useStoreEpisodes();

// mounted
onMounted(() => {
  storeEpisodes.defaultDisablePaginationBtns();
});
</script>
