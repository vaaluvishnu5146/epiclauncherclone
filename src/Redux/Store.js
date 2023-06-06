import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./Reducers/games.reducer";

// ROOT REDUCER
export default configureStore({
  reducer: {
    gamesReducer: gamesSlice,
  },
});
