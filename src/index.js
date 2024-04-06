import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from "./game/index.js";
import { Provider } from "react-redux";
import store from './game/store.js';
/* import * as ServiceWorker from './service-worker.js'
import reportWebVitals from './reportWebVitals.js'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

root.render(
    <Provider store={store}>
        <Game 
            width={ width * .9 }
            height={ height * .3334 }
        />
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//ServiceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
