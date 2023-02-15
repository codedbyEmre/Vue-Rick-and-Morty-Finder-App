<template>
  <section v-if="!storeEpisodes.loading" class="section p-0 mt-1">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card is-flex-direction-column">
            <div class="is-flex card-inner">
              <div class="card-content p-0">
                <div class="content p-5 has-text-grey-light">
                  <h2>
                    <i class="fas fa-tv mr-1"></i>
                    {{ storeEpisodes.episode.name }}
                  </h2>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Episode Id: <span class="has-text-dark">{{ storeEpisodes.episode.id }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Episode No: <span class="has-text-dark">{{ storeEpisodes.episode.episode }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Air Date: <span class="has-text-dark">{{ storeEpisodes.episode.air_date }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-5 mt-3 pb-3">
              <p class="is-size-6 mb-2 has-text-grey">Appeared Character Id(s):</p>
              <div class="characters-flex">
                <RouterLink
                  v-for="character in characters"
                  :to="`/characterDetail/${character}`"
                  :key="character"
                  class="character-flex"
                >
                  {{ character }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Loading v-else />

  <BackButton />
</template>

<script setup>
// imports
import { computed, onBeforeMount } from 'vue';
import { useStoreEpisodes } from '@/stores/storeEpisodes';
import { useRoute } from 'vue-router';
import Loading from '@/components/Shared/Loading.vue';
import BackButton from '@/components/Shared/BackButton.vue';

// store
const storeEpisodes = useStoreEpisodes();

// route
const route = useRoute();

const characters = computed(() => {
  let characters = [];
  storeEpisodes.episode.characters.forEach(character => {
    const splittedCharacters = character.split('/');
    characters.push(+splittedCharacters[splittedCharacters.length - 1]);
  });
  characters.sort((a, b) => a - b);

  return characters;
});

onBeforeMount(() => {
  storeEpisodes.getEpisodeById(route.params.id);
});
</script>
