import './App.css';
import {Component} from "react";
import {BoxClass} from "./component/BoxClass";

const choice = {
    rock: '../images/rock.jpg',
    scissors: '../images/scissors.jpg',
    paper: '../images/paper.png'
}
const winner = {
     win : "WIN"
        , lose : "LOSE"
        , draw : "DRAW"
}

export class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect : null,
            npcSelect : null,
            userstate : null,
            npcstate : null
        }

    }

    getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    increase = () => {
        this.setState({counter2:this.state.counter2+1})
    }

    judge = (user,npc) => {
         if(user === npc) {
             return 'draw';
         }else{
             if(user ==='rock') return npc ==='scissors' ? true : false;
             else if(user==='scissors') return npc === 'paper' ? true : false;
             else return npc === 'rock' ? true : false;
         }

    }

    play = (userChoice) =>{
        let npcChoice = null;
        let npcSelectTemp = null;  // setNpcSelect
        let userSelectTemp = null; // setUserSelect
        let userStateTemp = null;  // setUserState
        let npcStateTemp = null;   // setNpcState

        switch (this.getRandomInt(0, 3)){
            case 0:
                npcSelectTemp = choice['rock'];
                npcChoice = 'rock';
                break;
            case 1:
                npcSelectTemp = choice['paper'];
                npcChoice = 'paper';
                break;
            case 2:
                npcSelectTemp = choice['scissors'];
                npcChoice = 'scissors';
                break;
            default:

        }
        userSelectTemp = choice[userChoice];
        if(this.judge(userChoice, npcChoice) === 'draw'){
            userStateTemp = winner['draw'];
            npcStateTemp = winner['draw'];
        }
        else if (this.judge(userChoice, npcChoice)){
            userStateTemp = winner['win'];
            npcStateTemp = winner['lose'];
        }else{
            userStateTemp = winner['lose'];
            npcStateTemp = winner['win'];
        }

        this.setState({
             userSelect : userSelectTemp,
            npcSelect : npcSelectTemp,
            userstate : userStateTemp,
            npcstate : npcStateTemp
        })

    }

    render() {
        return (
        <>
        <div className="main">
            <BoxClass title="YOU" img={this.state.userSelect} winstate={this.state.userstate}></BoxClass>
            <BoxClass title="NPC" img={this.state.npcSelect} winstate={this.state.npcstate}></BoxClass>
        </div>
        <div className="main">
            <button className="userButton" onClick={()=>this.play("rock")}><img className='icon' src="../images/rock_icon.png" alt="No Pics."/></button>
            <button className="userButton" onClick={()=>this.play("scissors")}><img className='icon' src="../images/scissors_icon.png" alt="No Pics."/></button>
            <button className="userButton" onClick={()=>this.play("paper")}><img className='icon' src="../images/paper_icon.png" alt="No Pics."/></button>
        </div>
        </>

  );
    }
}
