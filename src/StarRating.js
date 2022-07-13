/*
Create by rabbi on 2022/7/8 
*/
import React from "react";
import {FaStar} from "react-icons/all";

//將引數原封不動回傳呼叫端(讓React有事情做,是為了讓程式不要出錯)
//onSelect 屬性是一個函式 onSelect = f=>f 一種預設值寫法
//當外界沒有傳入 onSelect 屬性時,有預設值的寫法可以保護程式不出錯
//onSelect = ()=>0 這樣寫也可以,只是宣告onSelect是一個function,但實際傳什麼進來還不確定
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



 export default  function  StarRating({style={},totalStars=5,selectedStars=0,onRate=f=>f,...props})
 {


     return  (
         <div style={{padding:"5px",...style}} {...props}>
             {createArray(totalStars).map((item,i)=>
                 (<Star key={i}
                        selected={selectedStars>i}
                        onSelect={onRate(i+1)}
                 ></Star>)
             )}
             <p>{selectedStars} of {totalStars}</p>
         </div>
     );
 }