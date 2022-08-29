import React from 'react'

function Card({ card, ...props }) {
    return (
        <div className="flip-card" {...props}>
            <div className={`flip-card-inner ${card.status ? "active" : ""}`}>
                <div className="flip-card-front">
                    <span className='quesitonmark'>?</span>
                </div>
                <div className="flip-card-back">
                    <div className="emoji">
                        {card.item}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card