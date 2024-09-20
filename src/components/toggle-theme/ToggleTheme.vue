<script lang="ts">
const element = document.querySelector('html');
export default {
    data() {
        return {
            darkMode: false
        }
    },
    methods: {
        toggleDarkMode() {
            element?.classList.toggle('my-app-dark');
            this.darkMode = !this.darkMode;
            localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
        },
    },
    mounted() {
        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark') {
            this.darkMode = true;
            element?.classList.toggle('my-app-dark');
        }
    },
}
</script>

<template>
    <Button size="small" :icon="`pi pi-${darkMode ? 'sun' : 'moon'}`" @click="toggleDarkMode()" severity="secondary"
        rounded outlined />
</template>