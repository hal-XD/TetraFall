import '../css/Controller.css'
import React from "react";


function GameController(){
    const moveUp = () => {};
    const moveDown = () => {};
    const moveLeft = () => {};
    const moveRight = () => {};
    const gamestart = () => {
        console.log('game start!! play Tetra Fall!!')
    };
    const gamereset = () => {
        console.log('game start!! play Tetra Fall!!')
    };
    return (
        <div>
            <div className='controller'>
                <div className='button-left'>
                    <button className='up' onClick={moveUp}>↑</button>
                    <button className='down' onClick={moveDown}>↓</button>
                    <button className='left' onClick={moveLeft}>←</button>
                    <button className='right' onClick={moveRight}>→</button>
                </div>
                <div className='button-right'>
                    <button className='start-button' onClick={gamestart}>A</button>
                    <button className='reset-button' onClick={gamereset}>B</button>
                </div>
            </div>
        </div>
    )
}

export default GameController;