import { IProduct } from '../../@types/product';
import axios from '../../axios';
import { fetchError, fetching, fetchSuccess } from '../slices/productSlice';
import { AppDispatch } from '../store';

export const fetchProducts = (categoryName = '') => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetching());

            const response = await axios.get<IProduct[]>(categoryName ? `/category/${categoryName}` : '');

            dispatch(fetchSuccess(response.data));
        } catch (e) {
            dispatch(fetchError());
        }
    };
};
