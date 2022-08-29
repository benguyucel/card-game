import React, { useEffect, useState } from 'react';
import { addScore, toggleActive } from '../../redux/slice/cardSlice'
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import './index.css'
import Card from '../Card';
function Cards() {
    const dispatch = useDispatch()
    const { items: cards, score } = useSelector(state => state.card)
    const [selectCard, setSelectCard] = useState([])

    const handleClick = (card) => {
        if (selectCard.length === 2 || card.status || score < 10) return false
        setSelectCard([...selectCard, card])
        dispatch(toggleActive({ id: card.id }))

    }
    useEffect(() => {
        if (selectCard.length === 2) {

            if (selectCard[0].item === selectCard[1].item) {
                dispatch(addScore(50))
                setSelectCard([])

            } else {
                dispatch(addScore(-10))
                setTimeout(() => {
                    dispatch(toggleActive({ id: selectCard[0].id }))
                    dispatch(toggleActive({ id: selectCard[1].id }))
                    setSelectCard([])
                }, 500);
            }
        }

    }, [selectCard,dispatch])
    return (
        <div className='card-content'>
            {cards.map(card => (
                <Card key={nanoid()} card={card} onClick={() => handleClick(card)} />
            ))}
        </div>

    )
}

export default Cards