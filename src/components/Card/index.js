import React from 'react'

function Card({ card, ...props }) {
    return (
        <div className={`card ${card.status ? "active" : ""}`} {...props}>
            <div className="front">
                <span className='quesitonmark'>?</span>
            </div>
            <div className="back">
                <div className="emoji">
                    {card.item}
                </div>
            </div>

        </div>
    )
}

export default Card