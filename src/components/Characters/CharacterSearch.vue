<template>
  <div class="field has-addons px-0 mb-6 mt-4">
    <div class="control search">
      <input
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        type="text"
        class="input searchInput"
        placeholder="Search a character by name..."
      />
    </div>
    <div class="control">
      <a
        href="#"
        aria-label="search"
        @click.prevent="storeCharacters.getAllCharacters((page = 1), modelValue)"
        class="button is-success searchBtn"
      >
        <i class="fas fa-search"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
// imports
import { useStoreCharacters } from '@/stores/storeCharacters';

// store
const storeCharacters = useStoreCharacters();

// props
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

// emits
const emit = defineEmits('update:modelValue');
</script>

<style scoped>
.search {
  width: 50% !important;
}

.searchInput,
.searchBtn {
  height: 3rem !important;
}

@media (max-width: 48rem) {
  .search {
    width: 100% !important;
  }
}
</style>
