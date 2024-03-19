import './App.css';
import {Box} from "./component/Box";
import {useState} from "react";

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

function App() {

  /*
  TODO: 1. 박스 2개 (타이틀, 사진, 결과)
        2. 가위바위보 버튼 존재
        3. 나: 버튼을 클릭하면 클릭한 값이 박스에 보임
        4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
        5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
        6. 승패 여부에 따라 테두리 색이 바뀐다: 이기면 초록, 지면 빨강, 비기면 검정
  */

    const [userSelect, setUserSelect] = useState(null);
    const [npcSelect, setNpcSelect] = useState(null);
    const [userstate, setUserstate] = useState(null);
    const [npcstate, setNpcstate] = useState(null);

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    const judge = (user,npc) => {
         if(user === npc) {
             return 'draw';
         }else{
             if(user ==='rock') return npc ==='scissors' ? true : false;
             else if(user==='scissors') return npc === 'paper' ? true : false;
             else return npc === 'rock' ? true : false;
         }

    }

    const play = (userChoice) =>{
        let npcChoice = null;
        switch (getRandomInt(0, 3)){
            case 0:
                setNpcSelect(choice['rock']);
                npcChoice = 'rock';
                break;
            case 1:
                setNpcSelect(choice['paper']);
                npcChoice = 'paper';
                break;
            case 2:
                setNpcSelect(choice['scissors']);
                npcChoice = 'scissors';
                break;
            default:

        }
        setUserSelect(choice[userChoice]);
        if(judge(userChoice, npcChoice) === 'draw'){
            setUserstate(winner['draw']);
            setNpcstate(winner['draw']);
        }
        else if (judge(userChoice, npcChoice)){
            setUserstate(winner['win']);
            setNpcstate(winner['lose']);
        }else{
            setUserstate(winner['lose']);
            setNpcstate(winner['win']);
        }
    }

    return (
        <>
        <div className="main">
            <Box title="YOU" img={userSelect} winstate={userstate}></Box>
            <Box title="NPC" img={npcSelect} winstate={npcstate}></Box>
        </div>
        <div className="main">
            <button className="userButton" onClick={()=>play("rock")}><img className='icon' src="../images/rock_icon.png" alt="No Pics."/></button>
            <button className="userButton" onClick={()=>play("scissors")}><img className='icon' src="../images/scissors_icon.png" alt="No Pics."/></button>
            <button className="userButton" onClick={()=>play("paper")}><img className='icon' src="../images/paper_icon.png" alt="No Pics."/></button>
        </div>
        </>

  );
}

export default App;
