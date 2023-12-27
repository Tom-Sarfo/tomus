import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      AddCartItem: (payload) =>
        set((state) => ({
          cart: [
            ...state.cart,
            {
              id: state.cart.length + 1,
              prod_id: payload.prod_id,
              productName: payload.productName,
              productPrice: payload.productPrice,
              size: payload.size,
              qty: payload.qty,
              imgUrl: payload.imgUrl,
            },
          ],
        })),
      removeAllBears: () => set({ cart: 0 }),
    }),
    {
      name: "cart-item",
      Storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;