import GameController from "./GameController";
import GameScreen from "./GameScreen";

interface TetraFallBoardProps {
    board:string[][],
}

function TetraFallBoard({board}:TetraFallBoardProps) {
    const style = {
        width: "40%",
    };
    return (
        <div style={style}>
            <h1 style={{textAlign:"center"}}>TetraFall Board</h1>
            <GameScreen board={board}></GameScreen>
            <GameController></GameController>
        </div>
    )
}

export default TetraFallBoard;