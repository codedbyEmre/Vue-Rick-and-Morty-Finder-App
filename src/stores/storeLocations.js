import { defineStore } from 'pinia';

export const useStoreLocations = defineStore('storeLocations', {
  state: () => {
    return {
      locations: [],
      location: {},
      locationsInfos: {},
      loading: false,
      page: 1,
      disablePrevBtn: false,
      disableNextBtn: false
    };
  },
  actions: {
    async getAllLocations(page = 1) {
      this.loading = true;
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
        const data = await res.json();
        this.locations = data.results;
        this.locationsInfos = {
          count: data.info.count,
          pages: data.info.pages
        };
        this.loading = false;
      } catch (error) {
        return error;
      }
    },
    async getLocationById(id) {
      this.loading = true;
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
        const data = await res.json();
        this.location = data;
        this.loading = false;
      } catch (error) {
        return error;
      }
    },
    handlePages(type) {
      if (type === 'prev' && this.page > 1) {
        this.page--;
      } else if (type === 'next' && this.page < this.locationsInfos.pages) {
        this.page++;
      }
      this.getAllLocations(this.page, this.search);
      this.defaultDisablePaginationBtns();
    },
    defaultDisablePaginationBtns() {
      if (this.page === 1) {
        this.disablePrevBtn = true;
      } else {
        this.disablePrevBtn = false;
      }
      if (this.page === this.locationsInfos.pages) {
        this.disableNextBtn = true;
      } else {
        this.disableNextBtn = false;
      }
    }
  }
});
