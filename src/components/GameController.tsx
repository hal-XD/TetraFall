import '../css/Controller.css'
import React,{Dispatch,SetStateAction} from "react";
import { TetraFallAction, TetraFallActionType, TetraFallState } from '../reducers/TetraFallReducer';
import { TetraFallBlockTypes } from '../constants/blocks';

interface GameControllerProps {
    state:TetraFallState,
    dispatch: Dispatch<TetraFallAction>
}

function GameController({state, dispatch}: GameControllerProps){
    const moveUp = () => {};
    const moveDown = () => {dispatch({type: TetraFallActionType.MoveDown})};
    const moveLeft = () => {};
    const moveRight = () => {};
    const gamestart = () => {
        console.log('game start!! play Tetra Fall!!')
        const newBoard = [...state.board];
        newBoard[0][0] = 'red';
        newBoard[0][1] = 'red';
        const newCurrentBlock = {
            type: TetraFallBlockTypes.Rectangle,
            startCoordinate: {
                x:0,y:0,
            },
            rotationState: 0,
        }
        const newState : TetraFallState = {
            board: newBoard,
            currentBlock: newCurrentBlock,
        }
        //dispatch({type: TetraFallActionType.SetBoard, payload: newBoard})
        dispatch({type: TetraFallActionType.SetGameState, payload :newState})
    };
    const gamereset = () => {
        console.log('game reset!! play Tetra Fall!!');
        const newBoard = Array(22).fill("").map(() => Array(10).fill("-"));
        dispatch({type: TetraFallActionType.SetBoard, payload: newBoard})
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