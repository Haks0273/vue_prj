
import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';


export function useCategory(){
    const categoryData = ref({});
    const router =  useRoute();
    const getCategoryData = async (id = router.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
        console.log(res);
    }
    onMounted(()=>{
        getCategoryData();
    }) 
    //导航栏点击后分类刷新
    onBeforeRouteUpdate((to)=>{
        getCategoryData(to.params.id);
    })
    return {categoryData}
}