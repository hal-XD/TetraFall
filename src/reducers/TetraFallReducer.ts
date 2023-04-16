import { Reducer } from "react";

type Board = string[][];
type CurrentBlock = {
  shape: string,
  rotationState: number,
};

export interface TetraFallState {
    board: Board,
    currentBlock: CurrentBlock,
}

export enum TetraFallActionType {
  SetBoard = "SetBoard",
  SetCurrentBlock = "SetCurrentBlock",
}

type SetBoardAction = {type: TetraFallActionType.SetBoard, payload : Board};
type SetCurrentBlock = {type: TetraFallActionType.SetCurrentBlock, payload : CurrentBlock};
export type TetraFallAction = SetBoardAction|SetCurrentBlock;

export const gameReducer = (state: TetraFallState, action:TetraFallAction): TetraFallState => {
  switch (action.type) {
    case TetraFallActionType.SetBoard:
      const newState1 = {...state, board: action.payload};
      return newState1;
    case TetraFallActionType.SetCurrentBlock:
      const newState2 = {...state, currentBlock: action.payload};
      return newState2;
    // 他のアクションタイプに対する処理を追加
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

const initialState : TetraFallState = {

  board: Array(22).fill("").map(() => Array(10).fill("-")),
  currentBlock: { shape:"", rotationState:-1 },
};

export const GenerateInitialState = () => {
    return initialState;
}