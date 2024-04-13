import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import Card from "./Card";
import ReactPaginate from 'react-paginate';


function SearchPage() {
    const mockResponse = { "guides": [
                                  {
                                      "username": "testUser1",
                                      "name": "Guide 1",
                                      "description": "This is a long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            <div className='searchPage__guides'>
                {guides.map(guide => (
                    <Card
                        src={guide.photoUrl}
                        tags={guide.attractions.join(', ')}
                        title={guide.name}
                        description={guide.description}
                        score={guide.score}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchPage
