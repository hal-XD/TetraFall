import React, {useState, useReducer} from "react";
import TetraFallBoard from "./TetraFallBoard";
import TetraFallInfo from "./TetraFallInfo";
import { gameReducer,GenerateInitialState,TetraFallState } from "../reducers/TetraFallReducer";
import { TetraFallBlockTypes } from "../constants/blocks";

const initialState : TetraFallState = {
  board: Array(22).fill("").map(() => Array(10).fill("-")),
  currentBlock: { type:TetraFallBlockTypes.None, startCoordinate: {x:0,y:0}, rotationState:-1 },
};

/**
 * TetraFall全体を管理するコンポーネント 
 * 内部に以下のコンポーネントを持つ
 *  - TetraFallBoard : 画面左。ゲーム画面と制御ボタン
 *  - TetraFallInfo  : 画面右。次に落ちてくるドロップと現在のスコア  
 * @returns TetraFall
 */
function TetraFall() {
    // 次に落ちてくるドロップを管理する
    // 現在のスコアを管理する
    // 現在のボードの状態を管理する。
    //  board[x][y] x行y列のゲームボード
    //    マスの色を管理する。(x色ならブロックなし)
    // const [gameBoard, setGameBoard] = useState(Array(22).fill("").map(() => Array(10).fill("-")));
    const [gameState, dispatch] = useReducer(gameReducer, initialState,GenerateInitialState);
    // 現在操作しているブロックの管理をする
    //  色、座標
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={style}>
            <TetraFallBoard state={gameState} dispatch={dispatch}></TetraFallBoard>
            <TetraFallInfo></TetraFallInfo>
        </div>
    )
}

export default TetraFall;