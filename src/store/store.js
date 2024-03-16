import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLocationState = {
  inputCity: "Boston",
  duplicateCity: "Boston",
  inputRegion: "MA",
  inputSiteType: "Music Stores",
  duplicateSiteType: "Music Stores",
  apiLocation: "Boston+MA+Music+Stores"
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    editCity(state, action) {
      state.inputCity = action.payload;
      state.duplicateCity = action.payload;
    },
    editRegion(state, action) {
      state.inputRegion = action.payload;
    },
    editType(state, action) {
      state.inputSiteType = action.payload;
      state.duplicateSiteType = action.payload;
    },
    editLocation(state) {
      const apiCity = state.duplicateCity.replace(/ /g, "+");
      const apiRegion = state.inputRegion;
      const apiSiteType = state.duplicateSiteType.replace(/ /g, "+");
      state.apiLocation = `${apiCity}+${apiRegion}+${apiSiteType}`;
    },
  },

})

const store = configureStore({
  reducer: {
    locationReducer: locationSlice.reducer,
  },
});

export const locationActions = locationSlice.actions;

export default store;
