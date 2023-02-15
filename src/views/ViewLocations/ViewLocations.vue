<template>
  <div v-if="!storeLocations.loading">
    <div class="locations">
      <div v-for="location in storeLocations.locations" :key="location.id" class="card location">
        <Location :location="location" />
      </div>
    </div>

    <Pagination :store="storeLocations" :infos="storeLocations.locationsInfos" pageName="Locations" />
  </div>

  <Loading v-else />
</template>

<script setup>
// imports
import { onMounted } from 'vue';
import { useStoreLocations } from '@/stores/storeLocations';
import Location from '@/components/Locations/Location.vue';
import Loading from '@/components/Shared/Loading.vue';
import Pagination from '@/components/Shared/Pagination.vue';

// store
const storeLocations = useStoreLocations();

// mounted
onMounted(() => {
  storeLocations.defaultDisablePaginationBtns();
});
</script>
