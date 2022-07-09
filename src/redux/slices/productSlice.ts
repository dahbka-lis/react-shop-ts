import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../@types/product';

interface IProductState {
    loading: boolean;
    error: boolean;
    products: IProduct[];
}

const initialState: IProductState = {
    loading: false,
    error: false,
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetching(state: IProductState) {
            state.loading = true;
            state.error = false;
            state.products = [];
        },
        fetchSuccess(state: IProductState, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.error = false;
            state.products = action.payload;
        },
        fetchError(state: IProductState) {
            state.loading = false;
            state.error = true;
        },
    },
});

export const { fetching, fetchSuccess, fetchError } = productSlice.actions;
export default productSlice.reducer;
