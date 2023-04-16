import '../css/Controller.css'

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
            <p>GameController</p>
            <div className='controller'>
                <div className='button-left'>
                    <button className='up' onClick={moveUp}></button>
                    <button className='down' onClick={moveDown}></button>
                    <button className='left' onClick={moveLeft}></button>
                    <button className='right' onClick={moveRight}></button>
                </div>
                <div className='button-right'>
                    <button onClick={gamestart}>start</button>
                    <button onClick={gamereset}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default GameController;