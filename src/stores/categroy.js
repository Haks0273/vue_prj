import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout.js';

export const useCategroyStore = defineStore('categroy', () => {
    const categroyList = ref([])

    const getCategory = async () => {
        const res = await getCategoryAPI()
        categroyList.value = res.result
    }

  return { categroyList, getCategory }
})
