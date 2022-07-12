/*
Create by rabbi on 2022/7/8 
*/
import React,{useState} from "react";
import {FaStar} from "react-icons/all";

                                        //將引數原封不動回傳呼叫端(讓React有事情做,是為了讓程式不要出錯)
 const  Star= ({selected=false,onSelect = f => f})=>
{
    return (<FaStar color={selected ? "red":"gray"} onClick={onSelect}/>);
}

const createArray = length => [...Array(length)];



 export default  function  StarRating({totalStars=5})
 {

    const [selectedStars,setSelectedStars]=useState(0);

     return  (
         <>
             {createArray(totalStars).map((item,i)=>
                 (<Star key={i}
                        selected={selectedStars>i}
                        onSelect={()=> setSelectedStars(i+1)}
                 ></Star>)
             )}
             <p>{selectedStars} of {totalStars}</p>
         </>
     );
 }