import React from 'react';
import './Card.css'
import StarIcon from "@material-ui/icons/Star";

function Card({ is_detailed, src, title, gender, email, phone, language, attraction, description, score, widthValue=200}) {
    return (
        <div className='card'>
           <div className="card__image">
                    <img src={src} alt="" />
           </div>
            <div className="card__info">
                <h2>{title}</h2>
                {is_detailed && (
                <div className="card__details">
                    <h4>Gender: {gender} </h4>
                    <h4>Email: {email}</h4>
                    <h4>Phone: {phone} </h4>
                    <h4>Languages: {language}</h4>
                    <h4>Attractions: {attraction} </h4>
                    </div>
                )}

                {description && (<h4 className="card__description">{description.length > 200 ? description.substring(0, 200) + "..." : description}</h4>)}
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
