import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    img,
    username,
    title,
    content,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{username}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{content.length > 500 ? content.substring(0, 500) + "..." : content}</p>
                </div>
            {/*
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                </div>
            */}
            </div>
        </div>
    )
}

export default SearchResult
