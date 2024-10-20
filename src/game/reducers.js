import { createSlice } from "@reduxjs/toolkit";
import { totalHearts } from "./config";

export const gameSlice = createSlice({
    name: "game",
    initialState: { 
        value : {
            isRunning: false,
            totalHeight: 0,
            totalWidth: 0,
            scrollPosition: 0,
            hearts: totalHearts,
            consumedBodies: [],
            bag: {
                pokeballs: 0,
            },
            activeKeyPress: null
        }
    },
    reducers: {
        consume: (state, action) => {
            let isPokeball = 0
            if ( action.payload.includes("pokeball") ) {
                isPokeball = 1
            }

            state.value = {
                ...state.value,
                bag: {
                    pokeballs: state.value.bag.pokeballs + isPokeball
                },
                consumedBodies: [
                    ...state.value.consumedBodies,
                    action.payload
                ]
            }
        },
        dimmensions: (state, action) => {
            state.value = {
                ...state.value,
                totalHeight: action.payload.height ?? state.value.totalHeight,
                totalWidth: action.payload.width ?? state.value.totalWidth,
            }
        },
        keyPress: (state, action) => {
            state.value = {
                ...state.value,
                activeKeyPress: action.payload
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
export const { consume, dimmensions, keyPress, running, scroll } = gameSlice.actions;


