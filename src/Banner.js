import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Advertisement here</h1>
                <h5>
                    Description. Blabla
                </h5>
                <Button variant='outlined'>Explore</Button>
            </div>
            <div className='banner__search'>
                <div className='banner__date'>
                    {showSearch && <Search />}

                    <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                        {showSearch ? "Hide" : "Enter Dates"}
                    </Button>
                </div>
                <Button className='banner__searchButton' variant='outlined'>Filters</Button>
                <SearchIcon fontSize="large" className='banner__searchIcon'/>
            </div>

        </div>
    )
}

export default Banner
