import { createContext, useReducer, type ReactNode } from "react";
import { type Artwork } from "../components/ui/ArtworkCard";

export interface CartItem extends Artwork {
  quantity: number;
  addedAt: Date;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Artwork }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "BUY_NOW"; payload: Artwork };

interface CartContextType extends CartState {
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  buyNow: (artwork: Artwork) => void;
  isInCart: (id: string) => boolean;
  cartItems: CartItem[];
  getTotalPrice: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export { CartContext };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Si l'item existe déjà, on ne l'ajoute pas (une œuvre d'art est unique)
        return state;
      }

      const newItem: CartItem = {
        ...action.payload,
        quantity: 1,
        addedAt: new Date(),
      };

      const newItems = [...state.items, newItem];
      const newTotal = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = newItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const newTotal = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = newItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);

      const newTotal = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = newItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };

    case "BUY_NOW":
      // Pour "Acheter maintenant", on simule un achat direct
      return state;

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  const addToCart = (artwork: Artwork) => {
    dispatch({ type: "ADD_ITEM", payload: artwork });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const buyNow = (artwork: Artwork) => {
    dispatch({ type: "BUY_NOW", payload: artwork });
  };

  const isInCart = (id: string) => {
    return state.items.some((item) => item.id === id);
  };

  const getTotalPrice = () => {
    return state.total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        buyNow,
        isInCart,
        cartItems: state.items,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
