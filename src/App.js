/*
Create by rabbi on 2022/7/5 
*/

import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import colorData from "./color-data.json"
import ColorList from "./ColorList";

const App = () =>{
  const [colors] = useState(colorData); //狀態變數進行hook
  //將color往下傳遞
    return(<>
        {
            <ColorList colors={colors}/>
            }

    </>);
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);