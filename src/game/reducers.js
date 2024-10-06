import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: { 
        value : {
            isRunning: false,
            scrollPosition: 0,
            consumedBodies: [],
            bag: {
                pokeballs: 0,
            }
        }
    },
    reducers: {
        consume: (state, action) => {
            state.value = {
                ...state.value,
                "consumedBodies": [
                    ...state.value.consumedBodies,
                    action.payload
                ]
            }
        },
        running: (state, action) => {
            state.value = {
                ...state.value,
                "isRunning": action.payload
            }
        },
        scroll: (state, action) => {
            if ( action.payload === 'right' )
                state.value = {
                    ...state.value,
                    scrollPosition: state.value.scrollPosition - .5
                }
            else if ( action.payload === 'left' )
                state.value = {
                    ...state.value,
                    scrollPosition: state.value.scrollPosition + .5
                }
        },
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
                ...state.value,
                "direction": action.payload,
                "frames": framesByDirection[action.payload]
            }
        }
    }
})

export const { direction } = spriteSlice.actions;
export const { consume, running, scroll } = gameSlice.actions;


