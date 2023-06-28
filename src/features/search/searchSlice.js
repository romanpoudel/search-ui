import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: "",
  categories:[],
  contents: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios("https://fakestoreapi.com/products");
    const data = await res.data;
    return data;
  }
);
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const res = await axios("https://fakestoreapi.com/products/categories");
    const data = await res.data;
    return data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTypedValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setTypedValue } = searchSlice.actions;

export default searchSlice.reducer;
