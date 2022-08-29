import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLevel, newGame } from '../../redux/slice/cardSlice'
import './index.css'
function Header() {
    const { score } = useSelector(state => state.card)
    const { items } = useSelector(state => state.card)

    const dispatch = useDispatch()
    return (
        <div className='header'>
            {score < 0 && (
                <>
                    <h2>GAME OVER</h2>
                    <button onClick={() => dispatch(newGame())}>new game</button>
                </>
            )}
            {score > 0 && (
                <>
                    <h2 className='score'>Your Score : <span>  {score}</span> <br />
                        <span>Single  card count :{items.length / 2} </span></h2>
                    <button className='button newGameButton' onClick={() => dispatch(newGame())}>new game</button>
                    <div className='level'>
                        <button className='button levelButton' onClick={() => dispatch(changeLevel(-5))}>Increase CARD</button>
                        <button className='button levelButton' onClick={() => dispatch(changeLevel(5))}>Decrease CARD</button>
                    </div>
                </>
            )}


        </div>
    )
}

export default Header