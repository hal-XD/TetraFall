import React,{Dispatch,SetStateAction} from "react";
import GameController from "./GameController";
import GameScreen from "./GameScreen";

import { TetraFallState,TetraFallAction } from "../reducers/TetraFallReducer";

interface TetraFallBoardProps {
    state: TetraFallState,
    dispatch: Dispatch<TetraFallAction>,
}

function TetraFallBoard({state, dispatch}:TetraFallBoardProps) {
    const style = {
        width: "40%",
    };
    return (
        <div style={style}>
            <h1 style={{textAlign:"center"}}>TetraFall Board</h1>
            <GameScreen state={state}></GameScreen>
            <GameController state={state} dispatch={dispatch}></GameController>
        </div>
    )
}

export default TetraFallBoard;