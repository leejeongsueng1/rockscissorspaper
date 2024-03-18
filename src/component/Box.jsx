import React from "react";
export const Box = (props) => {
    return (
        <div  className="box">
            <h1 className={props.title}>{props.title}</h1>
            <hr/>
            <img className='item-img' src={props && props.img} alt="No Pics"/>
            <hr/>
            <h2 className="state">{props.winstate}</h2>
        </div>
    )
}