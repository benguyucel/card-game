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

            <select name="level" onChange={(e) => setLevel(e.target.value)}>
                <option value="30">Easy</option>
                <option value="15">Medium</option>
                <option value="7">Hard</option>
                <option value="5">Veteran</option>
                <option value="4">Expert</option>
                <option value="1">So Expert :)</option>
            </select>
        </div>
    )
}

export default Header