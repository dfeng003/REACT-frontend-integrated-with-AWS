import React, { useState, useEffect } from 'react';
import './Blog.css';
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import SearchResult from "./SearchResult";
import ReactPaginate from 'react-paginate';
import { useHistory } from "react-router-dom";

function BlogPage() {
    const mockResponse = {"blogs": [
                             {
                                 "username": "testUser",
                                 "title": "Title of the blog",
                                 "content": "This is a long paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                 "photoUrl": "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                               },
                               {
                                "username": "testUser2",
                                "title": "Title of the blog2",
                                "content": "Content of the blog2",
                                "photoUrl": "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                              }
                              ],
                         "total_page": 5
                         }

    const history = useHistory();
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
            // Fetch blogs when the component mounts or when currentPage changes
            fetchBlogs(currentPage);
        }, [currentPage]);

    async function fetchBlogs(page) {
        try {
//            const response = await fetch(`/api/blogs?page=${page + 1}&limit=10`);
//            const data = await response.json();
            const data = mockResponse
            setBlogs(data.blogs);
            setPageCount(data.total_page);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    }

    function handlePageChange(selectedPage) {
        setCurrentPage(selectedPage.selected);
    }

    return (
        <div className='bloge'>
            <div className='blog__header'>
                <AddIcon className='blog__post' onClick={() => history.push('/post_blog')} />
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName={'blog-pagination'}
                    activeClassName={'active'}
                />
            </div>
            {blogs.map(blog => (
                <SearchResult
                    img={blog.photoUrl}
                    username={blog.username}
                    title={blog.title}
                    content={blog.content}
                />
            ))}
        </div>
    )
}

export default BlogPage
