import httpIntance from "@/utils/http";

export function getCategoryAPI(){
    return httpIntance({
        url:'/home/category/head',
    })
}