import { defineStore } from "pinia";
import api from "../api";

export const useUserStore = defineStore("user", {
  state: () => ({
    email: "",
    name: {
      firstname: "",
      lastname: "",
    },
    isAuth: false,
  }),
  actions: {
    async getUser() {
      const { data } = await api.user.getUser();
      this.email = data.email;
      this.name = data.name as unknown as {
        firstname: string;
        lastname: string;
      };
      this.isAuth = true;
    },
  },
});
