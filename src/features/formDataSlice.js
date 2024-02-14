import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nom: "",
  prenom: "",
  telephone: "",
  code: "",
  image: null,
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.nom = action.payload.nom;
      state.prenom = action.payload.prenom;
      state.telephone = action.payload.telephone;
      state.code = action.payload.code;
      state.image = action.payload.image;
    },
  },
});

export const { updateState } = formDataSlice.actions;

export default formDataSlice.reducer;
