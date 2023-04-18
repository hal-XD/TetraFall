import '../css/Screen.css'
import React from "react";

import { TetraFallState } from '../reducers/TetraFallReducer';

interface GameScreenProps {
    state:TetraFallState,
}

function GameScreen({state}:GameScreenProps){

    return (
        <div className='centered'>
            <div className="grid-container">
                {state.board.map((row,y) => 
                    row.map((color,x) => (
                        <div key={`${y}-${x}`} className={`grid-item ${color}`}></div>
                    )))}
            </div>
        </div>
    )

}

export default GameScreen;

