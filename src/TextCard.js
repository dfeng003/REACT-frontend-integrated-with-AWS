import React from 'react';
import './TextCard.css'
import StarIcon from "@material-ui/icons/Star";

function TextCard({ title, content, score}) {
    return (
        <div className='textcard'>
            <div className="textcard__info">
                <h2>{title}</h2>
                <h4 className="textcard__description">{content}</h4>
            </div>
            {score && (
                <div className="textcard__stars">
                    <StarIcon className="textcard__star" />
                    <p>
                        <strong>{score}</strong>
                    </p>
                </div>)}
        </div>
    )
}

export default TextCard
