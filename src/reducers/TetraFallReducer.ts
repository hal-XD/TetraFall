import { Reducer } from "react";
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
      const newState3 = {...state};
      return newState3;
    case TetraFallActionType.MoveDown:
      return MoveDownFunc(state);
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

// Reducerのaction
const MoveDownFunc = (state: TetraFallState) : TetraFallState => {
  const newBoard = [...state.board]
  const newCurrentBlock = {...state.currentBlock}
  const blockShape = TetraFallBlockShapes[newCurrentBlock.type];
  // newBoardを更新する
  // newCurrentBlockのyを1加算する
  newCurrentBlock.startCoordinate.y += 1;
  const newState = {
    board : newBoard,
    currentBlock: newCurrentBlock,
  };
  return  newState;
}

const initialState : TetraFallState = {

  board: Array(22).fill("").map(() => Array(10).fill("-")),
  currentBlock: { type:TetraFallBlockTypes.None, startCoordinate: {x:0,y:0}, rotationState:-1 },
};

export const GenerateInitialState = () => {
    return initialState;
}