import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../@types/product';

interface ICartState {
    items: ICartItem[];
    totalPrice: number;
    totalCount: number;
}

const initialState: ICartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
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
                return;
            }

            state.items.push(action.payload);
        },
        removeItem(state: ICartState, action: PayloadAction<number>) {
            const oldItem = state.items.find(item => item.id === action.payload);

            if (oldItem) {
                state.totalPrice -= oldItem.price * oldItem.count;
                state.totalPrice = Math.round(state.totalPrice * 100) / 100;
                state.totalCount -= oldItem.count;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        decrementItem(state: ICartState, action: PayloadAction<number>) {
            const oldItem = state.items.find(item => item.id === action.payload);

            if (oldItem && oldItem.count > 1) {
                oldItem.count--;
                state.totalCount--;
                state.totalPrice = Math.round(state.totalPrice * 100 - oldItem.price * 100) / 100;
            }
        },
        clearCart(state: ICartState) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const { addItem, removeItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
