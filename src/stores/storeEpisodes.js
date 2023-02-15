import { defineStore } from 'pinia';

export const useStoreEpisodes = defineStore('storeEpisodes', {
  state: () => {
    return {
      episodes: [],
      episode: {},
      episodesInfos: {},
      loading: false,
      page: 1,
      disablePrevBtn: false,
      disableNextBtn: false
    };
  },
  actions: {
    async getAllEpisodes(page = 1) {
      this.loading = true;
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
        const data = await res.json();
        this.episodes = data.results;
        this.episodesInfos = {
          count: data.info.count,
          pages: data.info.pages
        };
        this.loading = false;
      } catch (error) {
        return error;
      }
    },
    async getEpisodeById(id) {
      this.loading = true;
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        const data = await res.json();
        this.episode = data;
        this.loading = false;
      } catch (error) {
        return error;
      }
    },
    handlePages(type) {
      if (type === 'prev' && this.page > 1) {
        this.page--;
      } else if (type === 'next' && this.page < this.episodesInfos.pages) {
        this.page++;
      }
      this.getAllEpisodes(this.page, this.search);
      this.defaultDisablePaginationBtns();
    },
    defaultDisablePaginationBtns() {
      if (this.page === 1) {
        this.disablePrevBtn = true;
      } else {
        this.disablePrevBtn = false;
      }
      if (this.page === this.episodesInfos.pages) {
        this.disableNextBtn = true;
      } else {
        this.disableNextBtn = false;
      }
    }
  }
});
