import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, getLatestCartAPI, delCartAPI } from "@/apis/cart";

export const useCartStore = defineStore("cart", () => {
  const userStore = useUserStore();
  const cartList = ref([]);

  const islogin = computed(() => userStore.userInfo.token);

  const getLatestCart = async () => {
    const res = await getLatestCartAPI();
    cartList.value = res.result;
  };

  const addCart = async (goods) => {
    const { skuId, count } = goods;

    if (islogin.value) {
      await insertCartAPI({ skuId, count });
      getLatestCart();
    } else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        item.count++;
      } else {
        cartList.value.push(goods);
      }
    }
  };

  const delCart = async (skuId) => {
    if (islogin.value) {
      await delCartAPI([skuId]);
      getLatestCart();
    }
    cartList.value = cartList.value.filter((item) => item.skuId !== skuId);
  };
  const allCount = computed(() =>
    cartList.value.reduce((p, c) => p + c.count, 0)
  );
  const allPrice = computed(() =>
    cartList.value.reduce((p, c) => p + c.count * c.price, 0)
  );

  const selectedChange = (skuId, selected) => {
    const item = cartList.value.find((item) => skuId === item.skuId);
    if (item) {
      item.selected = selected;
    }
  };

  const isAll = computed(() => cartList.value.every((item) => item.selected));
  const selectedAll = (selected) => {
    cartList.value.forEach((item) => {
      item.selected = selected;
    });
  };
  const selectedCount = computed(() =>
    cartList.value.reduce((p, c) => p + (c.selected ? c.count : 0), 0)
  );
  const selectedPrice = computed(() =>
    cartList.value.reduce((p, c) => p + (c.selected ? c.count * c.price : 0), 0)
  );
  const clearCartList = ()=>{
    cartList.value = []
  }

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    selectedChange,
    isAll,
    selectedAll,
    selectedCount,
    selectedPrice,
    clearCartList,
    getLatestCart,
  };
});
