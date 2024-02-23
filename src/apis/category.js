import httpInstance from "@/utils/http";

export function getCategoryAPI(id){
    return httpInstance({
        url: '/category',
        method: 'get',
        params: {
         id   
        }
    })
}
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
}

export const getSubCategoryAPI = (data) => {
    return httpInstance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}