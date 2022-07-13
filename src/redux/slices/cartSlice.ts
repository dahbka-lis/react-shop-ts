import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../@types/product';

// - - Helpers - -
const getCartItems = (): ICartItem[] => {
    const items = window?.localStorage?.getItem('cart-items');

    if (items) {
        return JSON.parse(items);
    }

    return [];
};

const getTotalPrice = (): number => {
    const price = window?.localStorage?.getItem('total-price');

    if (price) {
        return Number(price);
    }

    return 0;
};

const getTotalCount = (): number => {
    const count = window?.localStorage?.getItem('total-count');

    if (count) {
        return Number(count);
    }

    return 0;
};
// - - - - - - -

interface ICartState {
    items: ICartItem[];
    totalPrice: number;
    totalCount: number;
}

const initialState: ICartState = {
    items: getCartItems(),
    totalPrice: getTotalPrice(),
    totalCount: getTotalCount(),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state: ICartState, action: PayloadAction<ICartItem>) {
            const oldItem = state.items.find(item => item.id === action.payload.id);

            state.totalCount++;
            state.totalPrice = Math.round(state.totalPrice * 100 + action.payload.price * 100) / 100;

            if (oldItem) {
                oldItem.count++;
            } else {
                state.items.push(action.payload);
            }

            window.localStorage.setItem('cart-items', JSON.stringify(state.items));
            window.localStorage.setItem('total-price', String(state.totalPrice));
            window.localStorage.setItem('total-count', String(state.totalCount));
        },
        removeItem(state: ICartState, action: PayloadAction<number>) {
            const oldItem = state.items.find(item => item.id === action.payload);

            if (oldItem) {
                state.totalPrice -= oldItem.price * oldItem.count;
                state.totalPrice = Math.round(state.totalPrice * 100) / 100;

                state.totalCount -= oldItem.count;
                state.items = state.items.filter(item => item.id !== action.payload);

                window.localStorage.setItem('cart-items', JSON.stringify(state.items));
                window.localStorage.setItem('total-price', String(state.totalPrice));
                window.localStorage.setItem('total-count', String(state.totalCount));
            }
        },
        decrementItem(state: ICartState, action: PayloadAction<number>) {
            const oldItem = state.items.find(item => item.id === action.payload);

            if (oldItem && oldItem.count > 1) {
                oldItem.count--;
                state.totalCount--;

                state.totalPrice = Math.round(state.totalPrice * 100 - oldItem.price * 100) / 100;

                window.localStorage.setItem('cart-items', JSON.stringify(state.items));
                window.localStorage.setItem('total-price', String(state.totalPrice));
                window.localStorage.setItem('total-count', String(state.totalCount));
            }
        },
        clearCart(state: ICartState) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;

            window.localStorage.setItem('cart-items', JSON.stringify(state.items));
            window.localStorage.setItem('total-price', String(state.totalPrice));
            window.localStorage.setItem('total-count', String(state.totalCount));
        },
    },
});

export const { addItem, removeItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
