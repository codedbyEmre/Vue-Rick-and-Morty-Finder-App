<template>
  <section v-if="!storeCharacters.loading" class="section p-0 mt-1">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card is-flex-direction-column">
            <div class="is-flex card-inner">
              <div class="card-image">
                <figure class="image">
                  <img :src="storeCharacters.character.image" :alt="storeCharacters.character.name" />
                </figure>
              </div>
              <div class="card-content p-0">
                <div class="content p-5 has-text-grey-light">
                  <h2>
                    <i class="fas fa-person mr-1"></i>
                    {{ storeCharacters.character.name }}
                  </h2>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Character Id: <span class="has-text-dark">{{ storeCharacters.character.id }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Species: <span class="has-text-dark">{{ storeCharacters.character.species }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Status: <span class="has-text-dark">{{ storeCharacters.character.status }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Gender: <span class="has-text-dark">{{ storeCharacters.character.gender }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Origin: <span class="has-text-dark">{{ storeCharacters.character.origin?.name }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Location:
                    <RouterLink :to="`/locationDetail/${locationId}`">
                      <span class="has-text-dark is-underlined has-text-link">{{
                        storeCharacters.character.location?.name
                      }}</span>
                    </RouterLink>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Created Date:
                    <span class="has-text-dark">{{ storeCharacters.character.created.slice(0, 10) }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-5 mt-3 pb-3">
              <p class="is-size-6 mb-2 has-text-grey">Appeared Episode Id(s):</p>
              <div class="episodes">
                <RouterLink
                  v-for="episode in episodes"
                  :to="`/episodeDetail/${episode}`"
                  :key="episode"
                  class="episode"
                >
                  {{ episode }}
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
import { useStoreCharacters } from '@/stores/storeCharacters';
import { useRoute } from 'vue-router';
import Loading from '@/components/Shared/Loading.vue';
import BackButton from '@/components/Shared/BackButton.vue';

// route
const route = useRoute();

// store
const storeCharacters = useStoreCharacters();

// get location id
const locationId = computed(() => {
  const splittedLocationArr = storeCharacters.character.location.url.split('/');
  const locationId = splittedLocationArr[splittedLocationArr.length - 1];
  return +locationId;
});

// formatted episodes arr
const episodes = computed(() => {
  let episodes = [];
  storeCharacters.character.episode.forEach(ep => {
    const splittedEpisodes = ep.split('/');
    episodes.push(+splittedEpisodes[splittedEpisodes.length - 1]);
  });
  episodes.sort((a, b) => a - b);
  return episodes;
});

onBeforeMount(() => {
  storeCharacters.getCharacterById(route.params.id);
});
</script>

<style scoped>
.card-image .image img {
  border-top-right-radius: 0 !important;
}

@media (max-width: 48rem) {
  .card-image .image img {
    border-top-right-radius: 0.25rem !important;
  }
}
</style>
