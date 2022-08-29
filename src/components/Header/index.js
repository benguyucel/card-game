import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLevel, newGame } from '../../redux/slice/cardSlice'
import './index.css'
function Header() {
    const { score } = useSelector(state => state.card)
    const [level, setLevel] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (Number(level) !== 0) {
            dispatch(changeLevel(level))
        }
    }, [level,dispatch])
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
                    <h2>Your Score : <span>  {score}</span></h2>
                    <button onClick={() => dispatch(newGame())}>new game</button>
                </>
            )}

           
        </div>
    )
}

export default Header