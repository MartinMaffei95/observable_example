export const store_without_observable: string = `
// ../redux/store.tsx
import { configureStore } from '@reduxjs/toolkit';
import CharactersSlice from './slices/Characters.slice';

export const store = configureStore({
    reducer: {
    character: CharactersSlice,
    },
});


`;
