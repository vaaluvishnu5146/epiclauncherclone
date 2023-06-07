import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./Reducers/games.reducer";
import wishlistReducer from "./Reducers/wishlist.reducer";

// ROOT REDUCER
export default configureStore({
  reducer: {
    gamesReducer: gamesSlice,
    wishlistReducer: wishlistReducer,
  },
});
