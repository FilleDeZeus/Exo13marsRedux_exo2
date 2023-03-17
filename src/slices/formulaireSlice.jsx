import { createSlice } from '@reduxjs/toolkit';

export const formulaireSlice = createSlice({
  // nom de la slice
  name: 'formulaire',
  // etat inial de la slice
  initialState: { users: [] }, //users tab vide
  // reducers = action de la slice
  reducers: {
    ajouter: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

