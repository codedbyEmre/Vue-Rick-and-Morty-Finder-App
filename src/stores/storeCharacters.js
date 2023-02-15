import { defineStore } from 'pinia';

export const useStoreCharacters = defineStore('storeCharacters', {
  state: () => {
    return {
      search: '',
      characters: [],
      character: {},
      charactersInfos: {},
      loading: false,
      page: 1,
      disablePrevBtn: false,
      disableNextBtn: false
    };
  },
  actions: {
    async getAllCharacters(page = 1, name = '') {
      this.loading = true;
      let url = `https://rickandmortyapi.com/api/character/`;

      if (name) {
        url += `?page=${page}&name=${name}`;
      } else {
        url += `?page=${page}`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        this.characters = data.results;
        this.charactersInfos = {
          count: data.info.count,
          pages: data.info.pages
        };
        this.loading = false;
      } catch (error) {
        this.loading = false;
        return error;
      }
    },
    async getCharacterById(id) {
      this.loading = true;
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        this.character = data;
        this.loading = false;
      } catch (error) {
        return error;
      }
    },
    handlePages(type) {
      if (type === 'prev' && this.page > 1) {
        this.page--;
      } else if (type === 'next' && this.page < this.charactersInfos.pages) {
        this.page++;
      }
      this.getAllCharacters(this.page, this.search);
      this.defaultDisablePaginationBtns();
    },
    defaultDisablePaginationBtns() {
      if (this.page === 1) {
        this.disablePrevBtn = true;
      } else {
        this.disablePrevBtn = false;
      }
      if (this.page === this.charactersInfos.pages) {
        this.disableNextBtn = true;
      } else {
        this.disableNextBtn = false;
      }
    }
  }
});
