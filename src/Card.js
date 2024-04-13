import React from 'react';
import './Card.css'
import StarIcon from "@material-ui/icons/Star";

function Card({ src, title, tags, description, score }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{tags}</h4>
                <h4 className="card__description">{description.length > 200 ? description.substring(0, 200) + "..." : description}</h4>
            </div>
            <div className="card__stars">
                <StarIcon className="card__star" />
                <p>
                    <strong>{score}</strong>
                </p>
            </div>
        </div>
    )
}

export default Card
