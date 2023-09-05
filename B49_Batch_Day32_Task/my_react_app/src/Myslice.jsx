import { createSlice } from '@reduxjs/toolkit';



const priceSlice = createSlice({
    name: 'price',
    initialState: {
        value: 0
    },
    reducers: {
        defaultprice: (state) => {
            state.value = 0;
        }
    }
});
export const{changeprice} = priceSlice.actions;
export default priceSlice.reducer;