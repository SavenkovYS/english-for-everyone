<template>
    <div class="user-login">
        <header class="user-login__header">
            <img class="user-login__image" src="~/assets/img/logo.png" alt="Английский для всех" />
        </header>
        <form class="user-login__form" @submit.prevent>
            <base-text-input
                v-for="field in formData"
                :key="field.id"
                :type="field.type"
                v-model="field.value"
                :placeholder="field.placeholder"
                :label="field.label"
                :id="field.id"
                class="user-login__input"
            />
            <div class="user-login__controls">
                <base-button class="user-login__login-button">Войти</base-button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import BaseTextInput from "@/components/base/BaseTextInput";
import {reactive} from "@vue/reactivity";
import BaseButton from "@/components/base/BaseButton.vue";
const formData = reactive({
    username: {
        id: 'username',
        type: 'text',
        placeholder: 'Ваш логин',
        label: 'Логин',
        value: ''
    },
    password: {
        id: 'password',
        type: 'password',
        placeholder: 'Пароль',
        label: 'Пароль',
        value: ''
    }
});
</script>

<style lang="scss" scoped>
.user-login {
    width: 500px;

    border: 1px solid #5fa406;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);

    &__header {
        padding: 10px 20px;
        min-height: 100px;

        background-color: #5fa406;
    }

    &__image {
        display: block;
        height: 80px;
    }

    &__form {
        padding: 35px 20px 15px;
    }

    &__controls {
        display: flex;
        justify-content: flex-end;
        margin-top: 25px;
    }

    &__input:not(:last-child) {
        margin-bottom: 10px;
    }
}
</style>