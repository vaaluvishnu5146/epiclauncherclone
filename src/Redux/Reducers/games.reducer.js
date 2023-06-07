import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    Racing: [],
    Ficton: [],
    Action: [],
    Killer: [],
    Battle: [],
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
        state.Racing = action.payload.filter((_d) => _d.category === "Racing");
        state.Ficton = action.payload.filter((_d) => _d.category === "Ficton");
        state.Action = action.payload.filter((_d) => _d.category === "Action");
        state.Killer = action.payload.filter((_d) => _d.category === "Killer");
        state.Battle = action.payload.filter((_d) => _d.category === "Battle");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveGames } = gamesSlice.actions;

// REDUCER EXPORT
export default gamesSlice.reducer;
