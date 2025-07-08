import { configureStore } from "@reduxjs/toolkit";
import bookReucer from "./slices/bookSlice";

const store=configureStore({
    reducer: {
        books: bookReucer,
    },
   
}); 
export default store;