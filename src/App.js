import { useState, useEffect } from 'react';
import './App.css';
import Box from './Components/Box';
import {Patterns} from './Patterns';

function App() {
    const [box, setBox] = useState(["", "", "","", "", "","", "", ""]);
    const [player, setPlayer] = useState("0");
    const [result, setResult] = useState({ winner: "none", state: "none" });

    useEffect(() => {
        whoWon();
        checkTie();

        if(player === "X"){
            setPlayer("0");
        }else{
            setPlayer("X");
        }
    }, [box]);

    useEffect(() => {
        if( result.state !== "none"){
            alert(`Game is Over! Winner is: ${result.winner}`);
            restartGame();
        }
    }, [result]);

    const selectBox = (square) =>{
        setBox(
            box.map((val, idx) => {
            if(idx === square && val === ""){
                return player;
            }

            return val;
        }));
    };

    const whoWon = () =>{
        Patterns.forEach((currPattern) => {
            const firstPlayer = box[currPattern[0]];
            if(firstPlayer === "") return;

            let foundWonPattern = true;

            currPattern.forEach((idx) => {
                if(box[idx] !== firstPlayer){
                    foundWonPattern = false;
                }
            })

            if(foundWonPattern){
                setResult({ winner: player, state: "won"});
            }
        })
    }

    const checkTie = () => {
        let filled = true;

        box.forEach((square) => {
            if(square === ""){
                filled = false;
            }
        });

        if(filled){
            setResult({ winner: "No One", state: "Tie"});
        }
    }

    const restartGame = () => {
        setBox(["", "", "","", "", "","", "", ""]);
        setPlayer("0");
    }

    return ( 
        <div className='App'>
            <h1 className='my-4'>Welcome to Tic-Tac-Toe Game</h1>
            <div className="game">
                <div className="gameRow">
                    <Box val={box[0]} selectBox={()=>{selectBox(0)}} />
                    <Box val={box[1]} selectBox={()=>{selectBox(1)}} />
                    <Box val={box[2]} selectBox={()=>{selectBox(2)}} />
                </div>
                <div className="gameRow">
                    <Box val={box[3]} selectBox={()=>{selectBox(3)}} />
                    <Box val={box[4]} selectBox={()=>{selectBox(4)}} />
                    <Box val={box[5]} selectBox={()=>{selectBox(5)}} />
                </div>
                <div className="gameRow">
                    <Box val={box[6]} selectBox={()=>{selectBox(6)}} />
                    <Box val={box[7]} selectBox={()=>{selectBox(7)}} />
                    <Box val={box[8]} selectBox={()=>{selectBox(8)}} />
                </div>
            </div>
        </div>
    );
}

export default App;