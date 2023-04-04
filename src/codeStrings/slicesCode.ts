export const sliceCharacter_without_observable: string = `
// ../redux/slices/Characters.slice.ts

//MODELS
import { CharacterState, Character } from '../../models';
// REDUX LIB TYPES
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CharacterState = {
  character: {} as Character,
  loading: false,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    getCharacter: (state, action) => {
    },
    getCharacterSuccess: (state, action: PayloadAction<Character>) => {
    },
    getCharacterError: (state, action) => {
    },
    stopFetchCharacter: (state) => {
    },
  },
});

export const {
  getCharacter,
  getCharacterSuccess,
  getCharacterError,
  stopFetchCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;

`;
