import '../css/Screen.css'

interface GameScreenProps {
    board:string[][]
}

function GameScreen({board}:GameScreenProps){

    return (
        <div className='centered'>
            <div className="grid-container">
                {board.map((row,y) => 
                    row.map((color,x) => (
                        <div key={'${x}-${y}'} className={`grid-item ${color}`}></div>
                    )))}
            </div>
        </div>
    )

}

export default GameScreen;

