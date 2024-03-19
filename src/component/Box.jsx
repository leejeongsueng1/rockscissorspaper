import React from "react";
export const Box = (props) => {
    if(props.img){
        if(props.winstate === 'DRAW'){
            return (
                <div  className="box-draw">
                    <h1 className={props.title}>{props.title}</h1>
                    <hr/>
                    <img className='item-img' src={props && props.img} alt=""/>
                    <hr/>
                    <h2 className={'state-'+props.winstate}>{props.winstate}</h2>
                </div>
            )
        }else if(props.winstate === 'WIN'){
            return (
                <div  className="box-win">
                    <h1 className={props.title}>{props.title}</h1>
                    <hr/>
                    <img className='item-img' src={props && props.img} alt=""/>
                    <hr/>
                    <h2 className={'state-'+props.winstate}>{props.winstate}</h2>
                </div>
            )
        }else{
            return (
                <div  className="box-lose">
                    <h1 className={props.title}>{props.title}</h1>
                    <hr/>
                    <img className='item-img' src={props && props.img} alt=""/>
                    <hr/>
                    <h2 className={'state-'+props.winstate}>{props.winstate}</h2>
                </div>
            )
        }

    }else{
        return (
        <div  className="box">
            <h1 className={props.title}>{props.title}</h1>
            <hr/>
            <div className='nullBox'></div>
            <hr/>
            <h2 className={'state-'+props.winstate}>{props.winstate}</h2>
        </div>
    )
    }

}