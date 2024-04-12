import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Guides found</h1>
            </div>
            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Beaches, Museums, Local Cuisines"
                title="Mike"
                description="With a deep passion for my city's culture, history, and hidden treasures, I offer personalized tours tailored to your preferences and interests. Whether you're seeking culinary delights, architectural wonders, or off-the-beaten-path discoveries, I'll craft a unique itinerary that showcases the best of Singapore's diverse offerings. "
                star={4.3}
            />
            </div>
    )
}

export default SearchPage
