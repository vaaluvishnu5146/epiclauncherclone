import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
  },
  reducers: {
    saveGames: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload) {
        state.games = [];
        state.games.push(...action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveGames } = gamesSlice.actions;

// REDUCER EXPORT
export default gamesSlice.reducer;
