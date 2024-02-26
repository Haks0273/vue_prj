import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});
    const cartStore = useCartStore();

    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      console.log(res);
      userInfo.value = res.result;
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.getLatestCart();
    };

    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCartList();
    };
    return { userInfo, getUserInfo, clearUserInfo };
  },
  {
    persist: true,
  }
);
