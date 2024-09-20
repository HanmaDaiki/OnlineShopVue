import api from "../api";
import { defineStore } from "pinia";
import { LoginDto } from "../dto/LoginDto";

export interface IAuthState {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    username: "",
    password: "",
  }),
  actions: {
    async login(data: LoginDto) {
      const response = await api.auth.login(data);
      localStorage.setItem("token", response.data.token);
      return response;
    },
  },
});
