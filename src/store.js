import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import productReducer from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
  },
});

export default store;
