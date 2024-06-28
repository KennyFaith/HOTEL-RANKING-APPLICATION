import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 1, name: "1 Star" },
    { id: 2, name: "2 Star" },
    { id: 3, name: "3 Star" },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      state.categories[index] = action.payload;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const { addCategory, updateCategory, deleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
