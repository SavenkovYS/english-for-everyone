<template>
  <li>
    <NuxtLink
        :to="item.link"
        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    >{{ item.label }}
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
interface Props {
  item: {
    label: string,
    link: {
      path?: string,
      name?: string
    }
  }
}

const { item } = defineProps<Props>();
</script>

<style scoped>

</style>