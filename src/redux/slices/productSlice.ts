import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../@types/product';
import axios from '../../axios';

// Async action
export const fetchProducts = createAsyncThunk('product/fetchAllProducts', async (categoryName: string) => {
    const response = await axios.get<IProduct[]>(categoryName ? `/category/${categoryName}` : '');

    return response.data;
});

// Initial state
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

// Slice
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.products = [];
        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
            state.error = false;
            state.products = [];
        });
    },
});

export default productSlice.reducer;
