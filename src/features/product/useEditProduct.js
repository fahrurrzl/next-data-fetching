import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useEditProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (product) => {
      const productResponse = await axiosInstance.patch(
        `/products/${product.id}`,
        product
      );

      return productResponse;
    },
    onSuccess,
  });
};
