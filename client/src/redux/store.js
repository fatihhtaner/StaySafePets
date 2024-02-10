import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favoritesSlice";
import userDataSlice from "./userDataSlice";

export default configureStore({
    reducer: {
        favorites: favoritesSlice,
        userData: userDataSlice,
    },
});