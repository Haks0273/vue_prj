<script setup>

  import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
  import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
  import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
  import LayoutHeaderFixed from '@/views/Layout/components/LayoutHeaderFixed.vue';

  import { useCategoryStore } from '@/stores/category';  
  import { onMounted } from 'vue';

  const categroyStore = useCategoryStore();
  onMounted(() => {
    categroyStore.getCategory();
  })
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutHeaderFixed />
  <!-- <RouterView :key = "$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>

