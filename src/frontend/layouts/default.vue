<template>
  <div class="layout">
    <the-header />
    <main class="layout__main">
      <slot />
    </main>
    <the-footer class="layout__footer" />
  </div>

</template>

<script lang="ts" setup>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

    &__main {
        flex-grow: 1;
    }

  &__footer {
    margin-top: auto;
  }
}
</style>