<template>
    <button class="base-button">
        <slot />
    </button>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.base-button {
    padding: 3px 8px;

    font-family: $ff-primary;
    color: $clr-main;
    font-size: var(--fs-btn);

    border: 1px solid $clr-accent;
    border-radius: 5px;
    background-color: $clr-accent;
    cursor: pointer;
}

.base-button:hover,
.base-button:focus {
    background-color: rgba($clr-accent, 0.8);
}
</style>