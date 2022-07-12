/*
Create by rabbi on 2022/7/12 
*/

import React from "react";
import StarRating from "./StarRating";

export default function Color({ title, color, rating }) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} onDoubleClick={e =>{ alert('double click')}} />
        </section>
    );
}
