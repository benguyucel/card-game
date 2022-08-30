import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLevel, changeMode, getCorrectCartCount, getGameMode, newGame } from '../../redux/slice/cardSlice'
import { gameModeControl, getModeLength } from '../../utilites/gameMode'
import './index.css'
function Header() {
    const { score } = useSelector(state => state.card)
    const { items } = useSelector(state => state.card)
    const gameMode = useSelector(getGameMode)
    const singleItem = (items.length / 2)
    const cardCount = useSelector(getCorrectCartCount)
    const dispatch = useDispatch()
    const [mode, setMode] = useState(0)
    const handleMode = () => {
        setMode(mode => mode + 1)
    }
    useEffect(() => {

        if (mode === getModeLength()) setMode(0)
        const { getMode } = gameModeControl(mode);
        dispatch(changeMode({ gameMode: getMode, currentCard: singleItem }))

    }, [mode])
    return (
        <div className='header'>
            {cardCount !== singleItem ? (
                <>
                    {score <= 0 && (
                        <>
                            <h2>GAME OVER <em>You did not finish :( </em></h2>
                            <button className='button newGameButton' onClick={() => dispatch(newGame(singleItem))}>new game</button>
                        </>
                    )}
                    {score > 0 && (
                        <>
                            <h2 className='score'>Your Score : <span>  {score}</span> <br />
                                <span>Single  card count :{singleItem} </span><br />
                                <span>Game Mode : {gameMode}</span>

                            </h2>
                            <div className='level'>
                                <button className='button levelButton' onClick={() => singleItem > 5 && dispatch(changeLevel(-5))}>Decrease CARD</button>
                                <button className='button levelButton' onClick={() => singleItem / 2 < 30 && dispatch(changeLevel(5))}>Increase CARD</button>
                            </div>
                            <div className="game">
                                <button className='button levelButton' onClick={() => handleMode()}>Change Game Mode </button>
                                <button className='button newGameButton' onClick={() => dispatch(newGame(singleItem))}>new game</button>
                            </div>
                        </>
                    )
                    }
                </>
            ) : (
                <>
                    <h2 className='score'>Wow finished the game your Score : <span>  {score}</span> <br />
                        <div className="div">
                            wanna play again ?
                            <button className='button newGameButton' onClick={() => dispatch(newGame(singleItem))}>new game</button>

                        </div>

                    </h2>

                </>
            )}



        </div >
    )
}

export default Header