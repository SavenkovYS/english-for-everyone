<template>
    <button class="base-button">
        <slot />
    </button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.base-button {
    padding: 3px 8px;

    color: #fff;
    font-size: 18px;

    border: 1px solid #9999CC;
    border-radius: 5px;
    background-color: #9999CC;
}

.base-button:hover,
.base-button:focus {
    background-color: rgb(150, 150, 245);
}
</style>