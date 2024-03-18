import React from "react";
export const Box = (props) => {

    if(props.img){
        return (
        <div  className="box">
            <h1 className={props.title}>{props.title}</h1>
            <hr/>
            <img className='item-img' src={props && props.img} alt=""/>
            <hr/>
            <h2 className="state">{props.winstate}</h2>
        </div>
    )
    }else{
        return (
        <div  className="box">
            <h1 className={props.title}>{props.title}</h1>
            <hr/>
            <div className='nullBox'></div>
            <hr/>
            <h2 className="state">{props.winstate}</h2>
        </div>
    )
    }

}