<template>
  <CharacterSearch
    v-model.trim="storeCharacters.search"
    @keyup.enter="storeCharacters.getAllCharacters((storeCharacters.page = 1), storeCharacters.search)"
  />

  <div v-if="!storeCharacters.loading">
    <div v-if="storeCharacters.characters && storeCharacters.characters.length">
      <div class="characters">
        <div v-for="character in storeCharacters.characters" :key="character.id" class="card">
          <Character :character="character" />
        </div>
      </div>

      <Pagination :store="storeCharacters" :infos="storeCharacters.charactersInfos" pageName="Characters" />
    </div>

    <NoCharacter v-else />
  </div>

  <Loading v-else />
</template>

<script setup>
// imports
import { onMounted } from 'vue';
import { useStoreCharacters } from '@/stores/storeCharacters';
import Character from '@/components/Characters/Character.vue';
import CharacterSearch from '@/components/Characters/CharacterSearch.vue';
import NoCharacter from '@/components/Characters/NoCharacter.vue';
import Loading from '@/components/Shared/Loading.vue';
import Pagination from '@/components/Shared/Pagination.vue';

// store
const storeCharacters = useStoreCharacters();

// mounted
onMounted(() => {
  storeCharacters.defaultDisablePaginationBtns();
});
</script>
