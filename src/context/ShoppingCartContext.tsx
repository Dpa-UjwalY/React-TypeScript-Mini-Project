import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuant: (id: number) => number;
  increaseItemQuant: (id: number) => void;
  decreaseItemQuant: (id: number) => void;
  removeItemQuant: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const getItemQuant = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuant = (id: number) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuant = (id: number) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemQuant = (id: number) => {
    setCartItem((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuant,
        increaseItemQuant,
        decreaseItemQuant,
        removeItemQuant,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
