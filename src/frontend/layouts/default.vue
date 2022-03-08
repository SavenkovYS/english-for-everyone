<template>
  <div class="layout">
    <the-header />
    <main>
      <slot />
    </main>
    <the-footer class="layout__footer" />
  </div>

</template>

<script>
import TheHeader from "../components/layout/TheHeader";
import TheFooter from "../components/layout/TheFooter";
export default {
  components: {TheFooter, TheHeader}
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__footer {
    margin-top: auto;
  }
}
</style>