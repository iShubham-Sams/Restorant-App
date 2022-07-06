import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { StateProvider } from './Components/Context/stateProvider';
import reducer from './Components/Context/reducer';
import { initialState } from './Components/Context/initialeStat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </Router>
);
