/*
Create by rabbi on 2022/7/8 
*/
import React from "react";
import {FaStar} from "react-icons/all";

 //將引數原封不動回傳呼叫端(讓React有事情做,是為了讓程式不要出錯)
 //們有狀態的純元件
 const  Star= ({selected=false,onSelect = f => f})=>
{
    return (<FaStar
        color={selected ? "red":"gray"}
        onClick={onSelect}
        style={{backgroundColor:"lightBlue"}}
    />);
}


const createArray = length => [...Array(length)];



 export default  function  StarRating({style={},totalStars=5,selectedStars=0,...props})
 {


     return  (
         <div style={{padding:"5px",...style}} {...props}>
             {createArray(totalStars).map((item,i)=>
                 (<Star key={i}
                        selected={selectedStars>i}
                 ></Star>)
             )}
             <p>{selectedStars} of {totalStars}</p>
         </div>
     );
 }