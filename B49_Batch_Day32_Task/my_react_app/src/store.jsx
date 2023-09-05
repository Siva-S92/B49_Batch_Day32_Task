import { configureStore } from "@reduxjs/toolkit";
import priceReducer from './Myslice';



const store = configureStore({
    reducer: {
        myprice: priceReducer,
    },
});
export default store;