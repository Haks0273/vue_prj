import httpInstance from "@/utils/http";

export const getCheckIonfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};
export const createOrderAPI = (data) => {
  return httpInstance({
    url: "/member/order",
    method: "POST",
    data
  });
};