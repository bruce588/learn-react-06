/*
Create by rabbi on 2022/7/12 
*/

import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/all";

export default function Color({id, title, color, onRating=f=>f ,onRemove= f=>f ,onRate=f=>f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={()=>onRemove(id)}><FaTrash></FaTrash></button>
            {/*事件一路往上傳遞:上層怎麼做不管,這邊只管發生的事情與ID*/}
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={onRating}
                        onRate={ rating => onRate(id,rating)}
                        onDoubleClick={
                (e) =>{ alert('double click')}
            } />
        </section>
    );
}
