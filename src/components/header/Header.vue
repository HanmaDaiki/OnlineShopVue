<script lang="ts">
import { mapWritableState, mapActions, mapState } from 'pinia';
import ToggleTheme from '../toggle-theme/ToggleTheme.vue';
import { useAuthStore } from '../../store/auth';
import { useUserStore } from '../../store/user';
export default {
    components: { ToggleTheme },
    data() {
        return {
            visible: false,
        }
    },
    computed: {
        ...mapWritableState(useAuthStore, ['username', 'password']),
        ...mapWritableState(useUserStore, ['isAuth']),
        ...mapState(useUserStore, ['email', 'name']),
    },
    methods: {
        ...mapActions(useAuthStore, ['login']),
        ...mapActions(useUserStore, ['getUser']),

        logout() {
            localStorage.setItem('token', '');
            this.isAuth = false;
            this.getUser();
        },

        async handleSubmitLogin() {
            const data = {
                username: this.username,
                password: this.password
            };

            await this.login(data);
            await this.getUser();
            this.visible = false;
        },
    }
};
</script>

<template>
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; margin: .5rem;">
        <template #start>
            <div class="flex items-center gap-3" v-if="isAuth">
                <Avatar :label="`${name.lastname.charAt(0).toUpperCase()}${name.firstname.charAt(0).toUpperCase()}`" />
                <p>{{ email }}</p>
            </div>
        </template>
        <template #end>
            <div class="flex items-center gap-3">
                <Button label="Login" severity="secondary" size="small" @click="visible = true" v-if="!isAuth" />
                <Dialog v-model:visible="visible" position="top" :draggable="false" modal header="Login" v-if="!isAuth">
                    <div class="flex flex-col gap-6 py-6 w-full">
                        <FloatLabel>
                            <InputText class="w-full" id="username" v-model="username" />
                            <label for="username">Username</label>
                        </FloatLabel>

                        <FloatLabel>
                            <Password id="password" v-model="password" :feedback="false" toggleMask />
                            <label for="password">Password</label>
                        </FloatLabel>
                    </div>

                    <div class="flex w-full justify-end gap-3 pb-6">
                        <Button label="Login" @click.stop="handleSubmitLogin" />
                        <Button label="Cancel" severity="secondary" @click="visible = false" />
                    </div>

                    <Fieldset legend="Test User" toggleable>
                        <p class="text-sm">login: johnd</p>
                        <p class="text-sm">password: m38rmF$</p>
                    </Fieldset>
                </Dialog>

                <Button icon="pi pi-sign-out" severity="danger" rounded outlined size="small" @click="logout"
                    v-if="isAuth" />
                <ToggleTheme />
            </div>
        </template>

    </Toolbar>
</template>