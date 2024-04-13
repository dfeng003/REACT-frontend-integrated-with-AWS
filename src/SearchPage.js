import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import ReactPaginate from 'react-paginate';


function SearchPage() {
    const mockResponse = { "guides": [
                                  {
                                      "username": "testUser1",
                                      "name": "Guide 1",
                                      "description": "Description of the guide",
                                      "languages": ["English", "French"],
                                      "attractions": ["Museums", "Zoos"],
                                      "photoUrl": "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
                                      "score": 4.6
                                  },
                                  {
                                    "username": "testUser2",
                                    "name": "Guide 2",
                                    "description": "Description of the guide2",
                                    "languages": ["English", "French"],
                                    "attractions": ["Museums", "Hiking Tracks"],
                                    "photoUrl": "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
                                    "score": 4.3
                                  }],
                              "total_page": 7
}

    const [guides, setGuides] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
            // Fetch guides when the component mounts or when currentPage changes
            fetchGuides(currentPage);
        }, [currentPage]);

    async function fetchGuides(page) {
        try {
//            const response = await fetch(`/api/guides?page=${page + 1}&limit=10`);
//            const data = await response.json();
            const data = mockResponse
            setGuides(data.guides);
            setPageCount(data.total_page);
        } catch (error) {
            console.error('Error fetching guides:', error);
        }
    }

    function handlePageChange(selectedPage) {
        setCurrentPage(selectedPage.selected);
    }

    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Guides found</h1>
            </div>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            {guides.map(guide => (
                <SearchResult
                    img={guide.photoUrl}
                    attractions={guide.attractions.join(', ')}
                    name={guide.name}
                    description={guide.description}
                    star={guide.score}
                />
            ))}
        </div>
    )
}

export default SearchPage
