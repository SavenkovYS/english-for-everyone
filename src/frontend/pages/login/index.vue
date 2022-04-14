<template>
    <NuxtLayout>
        <section class="user-login-view">
            <user-login class="user-login-view__login-form" />
        </section>
    </NuxtLayout>
</template>

<script setup>
import UserLogin from "@/components/login/UserLogin";

</script>

<style lang="scss" scoped>
.user-login-view {
    display: flex;
    justify-content: center;

    &__login-form {
        margin-top: 20vh;
    }
}
</style>