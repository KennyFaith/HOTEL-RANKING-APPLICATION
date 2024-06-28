import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addHotel: (state, action) => {
      state.hotels.push(action.payload);
    },
    updateHotel: (state, action) => {
      const index = state.hotels.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      state.hotels[index] = action.payload;
    },
    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
