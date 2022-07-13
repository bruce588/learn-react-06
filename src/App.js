/*
Create by rabbi on 2022/7/5 
*/

import React, {useState} from 'react';
import {useHotkeys} from "react-hotkeys-hook";
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import colorData from "./color-data.json"
import ColorList from "./ColorList";

const App = () =>{
  const [count, setCount] = useState(0);

  useHotkeys('f1', (event) => {
    event.preventDefault();
    setCount(count => count + 1);
  });
  useHotkeys('enter', (event) => {
    event.preventDefault();
    setCount(count => count + 2);
  });


  const [colors,setColors] = useState(colorData); //狀態變數進行hook
  //將color往下傳遞
    return(<>
        {
            <ColorList
                colors={colors}
                onRemoveColor={
                  (id)=>{
                  const newColors= colors.filter(color=>color.id!==id);
                  setColors(newColors);
                  }
                }
                onRateColor={
                  (id,rating)=> {
                    const newColors = colors.map(color => color.id === id ? {...color,rating} : color);
                    setColors(newColors);
                  }
                }
            />
            }
      <span>Pressed 'a' key {count} times.</span>
    </>);
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);