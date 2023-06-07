import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    games: [],
  },
  reducers: {
    saveGameToWishlist: (state, action) => {
      if (action.payload) {
        state.games.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveGameToWishlist } = wishlistSlice.actions;

// REDUCER EXPORT
export default wishlistSlice.reducer;
