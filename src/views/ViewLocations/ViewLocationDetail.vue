<template>
  <section v-if="!storeLocations.loading" class="section p-0 mt-1">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card is-flex-direction-column">
            <div class="is-flex card-inner">
              <div class="card-content p-0">
                <div class="content p-5 has-text-grey-light">
                  <h2>
                    <i class="fas fa-location mr-1"></i>
                    {{ storeLocations.location.name }}
                  </h2>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Location Id: <span class="has-text-dark">{{ storeLocations.location.id }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Dimension: <span class="has-text-dark">{{ storeLocations.location.dimension }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Type: <span class="has-text-dark">{{ storeLocations.location.type }}</span>
                  </p>
                  <p class="is-size-6 mb-2 has-text-grey">
                    Created Date: <span class="has-text-dark">{{ storeLocations.location.created.slice(0, 10) }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-5 mt-3 pb-3">
              <p class="is-size-6 mb-2 has-text-grey">Resident Character Id(s):</p>
              <div class="residents">
                <RouterLink
                  v-for="resident in residents"
                  :to="`/characterDetail/${resident}`"
                  :key="resident"
                  class="resident"
                >
                  {{ resident }}
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
import { useStoreLocations } from '@/stores/storeLocations';
import { useRoute } from 'vue-router';
import Loading from '@/components/Shared/Loading.vue';
import BackButton from '@/components/Shared/BackButton.vue';

// store
const storeLocations = useStoreLocations();

// route
const route = useRoute();

const residents = computed(() => {
  let residents = [];
  storeLocations.location.residents.forEach(resident => {
    const splittedResidents = resident.split('/');
    residents.push(+splittedResidents[splittedResidents.length - 1]);
  });
  residents.sort((a, b) => a - b);

  return residents;
});

onBeforeMount(() => {
  storeLocations.getLocationById(route.params.id);
});
</script>
