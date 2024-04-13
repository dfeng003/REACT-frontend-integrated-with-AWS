import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
            </div>
        </div>
    )
}

export default SearchResult
