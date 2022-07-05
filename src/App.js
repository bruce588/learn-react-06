/*
Create by rabbi on 2022/7/5 
*/

import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

const App = () => <h1>React</h1>;
const root = createRoot(document.getElementById("root"));
root.render(<App />);