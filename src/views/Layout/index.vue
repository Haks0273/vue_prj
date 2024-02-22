<script setup>

  import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
  import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
  import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
  import LayoutHeaderFixed from '@/views/Layout/components/LayoutHeaderFixed.vue';

  import { useCategroyStore } from '@/stores/categroy';  
  import { onMounted } from 'vue';

  const categroyStore = useCategroyStore();
  onMounted(() => {
    categroyStore.getCategory();
  })
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutHeaderFixed />
  <RouterView />
  <LayoutFooter />
</template>

