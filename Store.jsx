import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./HotelSlice";
import categoryReducer from "./CategorySlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    categories: categoryReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
