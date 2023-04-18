import { Console } from "console";
import { TetraFallBlockShapes, TetraFallBlockTypes } from "../constants/blocks";

type Board = string[][];
type CurrentBlock = {
  type: TetraFallBlockTypes,
  startCoordinate: {
    x: number,
    y: number
  }
  rotationState: number,
};

export interface TetraFallState {
    board: Board,
    currentBlock: CurrentBlock,
}

export enum TetraFallActionType {
  SetBoard = "SetBoard",
  SetCurrentBlock = "SetCurrentBlock",
  SetGameState = "SetGameState",
  MoveDown = "MoveDown",
}

type SetBoardAction = {type: TetraFallActionType.SetBoard, payload : Board};
type SetCurrentBlock = {type: TetraFallActionType.SetCurrentBlock, payload : CurrentBlock};
type SetGameState = {type: TetraFallActionType.SetGameState, payload: TetraFallState};
type MoveDown = {type: TetraFallActionType.MoveDown};
export type TetraFallAction = 
  SetBoardAction|SetCurrentBlock|SetGameState
    |MoveDown;

export const gameReducer = (state: TetraFallState, action:TetraFallAction): TetraFallState => {
  switch (action.type) {
    case TetraFallActionType.SetBoard:
      const newState1 = {...state, board: action.payload};
      return newState1;
    case TetraFallActionType.SetCurrentBlock:
      const newState2 = {...state, currentBlock: action.payload};
      return newState2;
    case TetraFallActionType.SetGameState:
      console.log("update.", action.payload);
      const newState3 = {...action.payload};
      return newState3;
    case TetraFallActionType.MoveDown:
      console.log("moveDown.")
      return MoveDownFunc(state);
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

// Reducerのaction
const MoveDownFunc = (state: TetraFallState) : TetraFallState => {
  //const newBoard = [...state.board]
  //const newCurrentBlock = {...state.currentBlock}
  const newBoard = state.board.map(row => [...row]);
  const newCurrentBlock = {
    ...state.currentBlock,
    startCoordinate:{...state.currentBlock.startCoordinate},
    rotationState:state.currentBlock.rotationState
  }
  console.log("currentBlock.x",newCurrentBlock.startCoordinate.x)
  if(newCurrentBlock.type === TetraFallBlockTypes.None) {
    console.log("None");
    return state;
  }
  const blockShape = TetraFallBlockShapes[newCurrentBlock.type];
  const color = newBoard[newCurrentBlock.startCoordinate.x][newCurrentBlock.startCoordinate.y];
  // newBoardを更新する
  for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
      // todo: ブロックへの衝突判定を考慮する

      // [x-1]    <- 1つ上がブロックなら下にずらす。
      // [x  ][y]
      if (i-1>=0 && blockShape[i-1][j]===1 && newCurrentBlock.startCoordinate.x+i<22) {
        newBoard[newCurrentBlock.startCoordinate.x+i][newCurrentBlock.startCoordinate.y+j] = color;
      } else {
        newBoard[newCurrentBlock.startCoordinate.x+i][newCurrentBlock.startCoordinate.y+j] = '-';
      }
    }
  }
  // newCurrentBlockのxを1加算する
  newCurrentBlock.startCoordinate.x += 1;
  const newState = {
    board : newBoard,
    currentBlock: newCurrentBlock,
  };
  return  newState;
}

export const GenerateInitialState = (initialState:TetraFallState) => {
    console.log("init.");
    return initialState;
}