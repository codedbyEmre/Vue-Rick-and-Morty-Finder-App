<template>
  <RouterLink :to="`/locationDetail/${location.id}`">
    <header class="card-header">
      <p class="card-header-title">{{ location.name }}</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-location"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="subtitle is-6 my-2 has-text-grey">
          Location Id: <span class="has-text-dark">{{ location.id }}</span>
        </p>
        <p class="subtitle is-6 my-2 has-text-grey">
          Dimension: <span class="has-text-dark">{{ location.dimension }}</span>
        </p>
        <p class="subtitle is-6 my-2 has-text-grey">
          Type: <span class="has-text-dark">{{ location.type }}</span>
        </p>
        <p class="subtitle is-6 my-2 has-text-grey">
          Created Date: <span class="has-text-dark">{{ location.created.slice(0, 10) }}</span>
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
//  props
const props = defineProps({
  location: {
    type: Object,
    required: true
  }
});
</script>
