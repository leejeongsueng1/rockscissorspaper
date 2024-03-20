import {Component} from "react";

export class BoxClass extends Component {
    render() {
        if(this.props.img){
        if(this.props.winstate === 'DRAW'){
            return (
                <div  className="box-draw">
                    <h1 className={this.props.title}>{this.props.title}</h1>
                    <hr/>
                    <img className='item-img' src={this.props && this.props.img} alt=""/>
                    <hr/>
                    <h2 className={'state-'+this.props.winstate}>{this.props.winstate}</h2>
                </div>
            )
        }else if(this.props.winstate === 'WIN'){
            return (
                <div  className="box-win">
                    <h1 className={this.props.title}>{this.props.title}</h1>
                    <hr/>
                    <img className='item-img' src={this.props && this.props.img} alt=""/>
                    <hr/>
                    <h2 className={'state-'+this.props.winstate}>{this.props.winstate}</h2>
                </div>
            )
        }else{
            return (
                <div  className="box-lose">
                    <h1 className={this.props.title}>{this.props.title}</h1>
                    <hr/>
                    <img className='item-img' src={this.props && this.props.img} alt=""/>
                    <hr/>
                    <h2 className={'state-'+this.props.winstate}>{this.props.winstate}</h2>
                </div>
            )
        }

    }else{
        return (
        <div  className="box">
            <h1 className={this.props.title}>{this.props.title}</h1>
            <hr/>
            <div className='nullBox'></div>
            <hr/>
            <h2 className={'state-'+this.props.winstate}>{this.props.winstate}</h2>
        </div>
    )
    }
    }
}

