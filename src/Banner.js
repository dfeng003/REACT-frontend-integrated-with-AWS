import React, { useState } from 'react'
import './Banner.css'
import Filters from './Filters'
import { Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';

const { beforeToday,} = DateRangePicker;

function Banner() {
    const history = useHistory();
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});

    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    const handleFilterConfirm = (filters) => {
        setSelectedFilters(filters);
        setIsFiltersOpen(false);
        console.log("Filters Selected:", filters);
    };

    const handleSearch = () => {
        // TODO: API call
        console.log("Sending search request:", selectedFilters);
    };

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
                <Button onClick={toggleFilters} className='banner__searchButton' variant='outlined'>Filters</Button>
                {isFiltersOpen && (
                    <Filters isOpen={isFiltersOpen} onClose={toggleFilters} onConfirm={handleFilterConfirm} />
                 )}
                <SearchIcon onClick={() => history.push('/search')} variant='outlined' fontSize="large" className='banner__searchIcon'/>
            </div>

        </div>
    )
}

export default Banner
