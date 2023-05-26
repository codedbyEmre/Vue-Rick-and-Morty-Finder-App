<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-family-monospace">Rick and Morty</RouterLink>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }" ref="navbarMenuRef">
        <div class="navbar-end">
          <RouterLink @click="handlePageClicked" to="/" class="navbar-item" active-class="is-active"
            >Characters</RouterLink
          >
          <RouterLink @click="handlePageClicked" to="/episodes" class="navbar-item" active-class="is-active"
            >Episodes</RouterLink
          >
          <RouterLink @click="handlePageClicked" to="/locations" class="navbar-item" active-class="is-active"
            >Locations</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
//  imports
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreCharacters } from '@/stores/storeCharacters';
import { useStoreEpisodes } from '@/stores/storeEpisodes';
import { useStoreLocations } from '@/stores/storeLocations';

// stores
const storeCharacters = useStoreCharacters();
const storeEpisodes = useStoreEpisodes();
const storeLocations = useStoreLocations();

const showMobileNav = ref(false);
const navbarBurgerRef = ref(null);
const navbarMenuRef = ref(null);

onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false;
  },
  {
    ignore: [navbarBurgerRef]
  }
);

const handlePageClicked = () => {
  showMobileNav.value = false;

  storeCharacters.page = 1;
  storeCharacters.search = '';
  storeCharacters.getAllCharacters(1, '');

  storeEpisodes.page = 1;
  storeEpisodes.getAllEpisodes(1);

  storeLocations.page = 1;
  storeLocations.getAllLocations(1);
};
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
