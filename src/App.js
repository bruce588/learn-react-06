/*
Create by rabbi on 2022/7/5 
*/

import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import StarRating from "./StarRating";


const App = () =>{

    return(<>
        <h1>React</h1>
      <StarRating totalStars={5}/>

    </>);
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);