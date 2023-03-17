import { configureStore } from '@reduxjs/toolkit';
import {formulaireSlice} from './slices/formulaireSlice.jsx';

const formulaireReducer = formulaireSlice.reducer;

export const store = configureStore({
    reducer: {
        formulaire: formulaireReducer,
    },
});
