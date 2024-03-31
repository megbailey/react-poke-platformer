import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: { 
        value : {
            isRunning: false,
        }
    },
    reducers: {
        running: (state, action) => {
            state.value = {
                ...state,
                "isRunning": action.payload
            }
        }
    }
})


const framesByDirection = {
    FRONT: {
        startWidth: 1,
        states: 3
    },
    BACK: {
        startWidth: 49,
        states: 3
    },
    LEFT: {
        startWidth: 98,
        states: 2
    },
    RIGHT: {
        startWidth: 130,
        states: 2
    }
} 

export const spriteSlice = createSlice({
    name: "sprite",
    initialState: { 
        value : {
            direction: "FRONT",
            frames: {
                startWidth: 1,
                states: 3
            }
        }
    },
    reducers: {
        direction: (state, action) => {
            state.value = {
                ...state,
                "direction": action.payload,
                "frames": framesByDirection[action.payload]
            }
        }
    }
})

export const { direction } = spriteSlice.actions;
export const { running } = gameSlice.actions;


