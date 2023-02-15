<template>
  <RouterLink :to="`/characterDetail/${character.id}`">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="character.image" :alt="character.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 mb-4">{{ character.name }}</p>
          <p class="subtitle is-6 my-2 has-text-grey">
            Character Id: <span class="has-text-dark">{{ character.id }}</span>
          </p>
          <p class="subtitle is-6 mb-2 has-text-grey">
            Species: <span class="has-text-dark">{{ character.species }}</span>
          </p>
          <p class="subtitle is-6 mb-0 has-text-grey">
            Status: <span class="has-text-dark">{{ character.status }}</span>
          </p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
//  props
const props = defineProps({
  character: {
    type: Object,
    required: true
  }
});
</script>
