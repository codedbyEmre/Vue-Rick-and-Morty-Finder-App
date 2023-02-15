<template>
  <RouterLink :to="`/episodeDetail/${episode.id}`">
    <header class="card-header">
      <p class="card-header-title">{{ episode.name }}</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fa-solid fa-tv"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="subtitle is-6 my-2 has-text-grey">
          Episode Id: <span class="has-text-dark">{{ episode.id }}</span>
        </p>
        <p class="subtitle is-6 my-2 has-text-grey">
          Episode No: <span class="has-text-dark">{{ episode.episode }}</span>
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
//  props
const props = defineProps({
  episode: {
    type: Object,
    required: true
  }
});
</script>
