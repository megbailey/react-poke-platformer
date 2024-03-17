import { configureStore } from "@reduxjs/toolkit";
import { gameSlice, spriteSlice } from "./reducers.js";


const store = configureStore({
    reducer: {
        game:  gameSlice.reducer,
        sprite: spriteSlice.reducer
    }
})

export default store;