/*
Create by rabbi on 2022/7/12 
*/

import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/all";

export default function Color({id, title, color, rating ,onRemove= f=>f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={()=>onRemove(id)}><FaTrash></FaTrash></button>
            <!-- 事件一路往上傳遞-->
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} onDoubleClick={e =>{ alert('double click')}} />
        </section>
    );
}
