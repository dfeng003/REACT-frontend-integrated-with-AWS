import React, { useState } from 'react'
import './Banner.css'
import { Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';

const { beforeToday,} = DateRangePicker;

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
                    <DateRangePicker disabledDate={beforeToday()}/>
                </div>
                <Button className='banner__searchButton' variant='outlined'>Filters</Button>
                <SearchIcon fontSize="large" className='banner__searchIcon'/>
            </div>

        </div>
    )
}

export default Banner
