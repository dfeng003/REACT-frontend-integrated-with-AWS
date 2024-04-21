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
    // Includes filter input bars and search button to search for guides
    const history = useHistory();
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [dateRange, setDateRange] = useState('');

    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    const handleFilterConfirm = (filters) => {
        setSelectedFilters(filters);
        setIsFiltersOpen(false);
    };

    const handleSearch = () => {
        // format start and end to iso string, considering the timezone difference.
        const start_iso = new Date(dateRange[0].getTime() - (dateRange[0].getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
        const end_iso = new Date(dateRange[1].getTime() - (dateRange[1].getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
        const queryParams = {
              startdate: start_iso,
              enddate: end_iso,
              page: 1,
              limit: 10,
              ...selectedFilters,
            };

            const queryString = Object.keys(queryParams)
              .map(key => `${key}=${queryParams[key]}`)
              .join('&');

            // Navigate to the search page with the constructed query parameters
            history.push(`/search?${queryString}`);
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
                    <DateRangePicker onChange={setDateRange} disabledDate={beforeToday()}/>
                </div>
                <Button onClick={toggleFilters} className='banner__searchButton' variant='outlined'>Filters</Button>
                {isFiltersOpen && (
                    <Filters isOpen={isFiltersOpen} onClose={toggleFilters} onConfirm={handleFilterConfirm} />
                 )}
                <SearchIcon onClick={handleSearch} variant='outlined' fontSize="large" className='banner__searchIcon'/>
            </div>

        </div>
    )
}

export default Banner
