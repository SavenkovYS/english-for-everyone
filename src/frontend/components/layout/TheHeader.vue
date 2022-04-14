<template>
    <header class="header">
        <main-navigation />
    </header>
</template>

<script lang="ts" setup>
import MainNavigation from "~/components/layout/navigation/MainNavigation.vue";
</script>

<style lang="scss" scoped>
.header {
    padding: 15px $padding-containers;

    background-color: $clr-secondary;
}
</style>