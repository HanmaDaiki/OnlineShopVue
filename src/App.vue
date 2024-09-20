<script lang="ts">
import { mapActions } from 'pinia';
import Header from './components/header/Header.vue';
import { useUserStore } from './store/user';

export default {
  components: { Header },
  methods: {
    ...mapActions(useUserStore, ['getUser']),
  },
  mounted() {
    this.getUser();
  }
};
</script>

<template>
  <Header />
</template>

<style scoped></style>
